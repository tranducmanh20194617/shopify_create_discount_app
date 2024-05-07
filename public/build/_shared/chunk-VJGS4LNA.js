import {
  ApolloError,
  DocumentType,
  NetworkStatus,
  __assign,
  __rest,
  canUseLayoutEffect,
  canUseWeakMap,
  compact,
  equal,
  getApolloContext,
  init_tslib_es6,
  invariant,
  isNonEmptyArray,
  maybeDeepFreeze,
  mergeOptions,
  require_rehackt,
  useApolloClient,
  verifyDocumentType
} from "/build/_shared/chunk-UCOQG5ZQ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@apollo/client/react/hooks/useQuery.js
init_tslib_es6();
var React2 = __toESM(require_rehackt(), 1);

// node_modules/@apollo/client/react/hooks/useSyncExternalStore.js
var React = __toESM(require_rehackt(), 1);
var didWarnUncachedGetSnapshot = false;
var uSESKey = "useSyncExternalStore";
var realHook = React[uSESKey];
var useSyncExternalStore = realHook || function(subscribe, getSnapshot, getServerSnapshot) {
  var value = getSnapshot();
  if (
    // DEVIATION: Using __DEV__
    globalThis.__DEV__ !== false && !didWarnUncachedGetSnapshot && // DEVIATION: Not using Object.is because we know our snapshots will never
    // be exotic primitive values like NaN, which is !== itself.
    value !== getSnapshot()
  ) {
    didWarnUncachedGetSnapshot = true;
    globalThis.__DEV__ !== false && invariant.error(58);
  }
  var _a = React.useState({
    inst: { value, getSnapshot }
  }), inst = _a[0].inst, forceUpdate = _a[1];
  if (canUseLayoutEffect) {
    React.useLayoutEffect(function() {
      Object.assign(inst, { value, getSnapshot });
      if (checkIfSnapshotChanged(inst)) {
        forceUpdate({ inst });
      }
    }, [subscribe, value, getSnapshot]);
  } else {
    Object.assign(inst, { value, getSnapshot });
  }
  React.useEffect(function() {
    if (checkIfSnapshotChanged(inst)) {
      forceUpdate({ inst });
    }
    return subscribe(function handleStoreChange() {
      if (checkIfSnapshotChanged(inst)) {
        forceUpdate({ inst });
      }
    });
  }, [subscribe]);
  return value;
};
function checkIfSnapshotChanged(_a) {
  var value = _a.value, getSnapshot = _a.getSnapshot;
  try {
    return value !== getSnapshot();
  } catch (_b) {
    return true;
  }
}

// node_modules/@apollo/client/react/hooks/internal/wrapHook.js
var wrapperSymbol = Symbol.for("apollo.hook.wrappers");
function wrapHook(hookName, useHook, clientOrObsQuery) {
  var queryManager = clientOrObsQuery["queryManager"];
  var wrappers = queryManager && queryManager[wrapperSymbol];
  var wrapper = wrappers && wrappers[hookName];
  return wrapper ? wrapper(useHook) : useHook;
}

// node_modules/@apollo/client/react/hooks/useQuery.js
var hasOwnProperty = Object.prototype.hasOwnProperty;
function useQuery(query, options) {
  if (options === void 0) {
    options = /* @__PURE__ */ Object.create(null);
  }
  return wrapHook("useQuery", _useQuery, useApolloClient(options && options.client))(query, options);
}
function _useQuery(query, options) {
  return useInternalState(useApolloClient(options.client), query).useQuery(options);
}
function useInternalState(client, query) {
  var stateRef = React2.useRef();
  if (!stateRef.current || client !== stateRef.current.client || query !== stateRef.current.query) {
    stateRef.current = new InternalState(client, query, stateRef.current);
  }
  var state = stateRef.current;
  state.forceUpdateState = React2.useReducer(function(tick) {
    return tick + 1;
  }, 0)[1];
  return state;
}
var InternalState = (
  /** @class */
  function() {
    function InternalState2(client, query, previous) {
      var _this = this;
      this.client = client;
      this.query = query;
      this.forceUpdate = function() {
        return _this.forceUpdateState();
      };
      this.ssrDisabledResult = maybeDeepFreeze({
        loading: true,
        data: void 0,
        error: void 0,
        networkStatus: NetworkStatus.loading
      });
      this.skipStandbyResult = maybeDeepFreeze({
        loading: false,
        data: void 0,
        error: void 0,
        networkStatus: NetworkStatus.ready
      });
      this.toQueryResultCache = new (canUseWeakMap ? WeakMap : Map)();
      verifyDocumentType(query, DocumentType.Query);
      var previousResult = previous && previous.result;
      var previousData = previousResult && previousResult.data;
      if (previousData) {
        this.previousData = previousData;
      }
    }
    InternalState2.prototype.forceUpdateState = function() {
      globalThis.__DEV__ !== false && invariant.warn(51);
    };
    InternalState2.prototype.executeQuery = function(options) {
      var _this = this;
      var _a;
      if (options.query) {
        Object.assign(this, { query: options.query });
      }
      this.watchQueryOptions = this.createWatchQueryOptions(this.queryHookOptions = options);
      var concast = this.observable.reobserveAsConcast(this.getObsQueryOptions());
      this.previousData = ((_a = this.result) === null || _a === void 0 ? void 0 : _a.data) || this.previousData;
      this.result = void 0;
      this.forceUpdate();
      return new Promise(function(resolve) {
        var result;
        concast.subscribe({
          next: function(value) {
            result = value;
          },
          error: function() {
            resolve(_this.toQueryResult(_this.observable.getCurrentResult()));
          },
          complete: function() {
            resolve(_this.toQueryResult(result));
          }
        });
      });
    };
    InternalState2.prototype.useQuery = function(options) {
      var _this = this;
      this.renderPromises = React2.useContext(getApolloContext()).renderPromises;
      this.useOptions(options);
      var obsQuery = this.useObservableQuery();
      var result = useSyncExternalStore(React2.useCallback(function(handleStoreChange) {
        if (_this.renderPromises) {
          return function() {
          };
        }
        _this.forceUpdate = handleStoreChange;
        var onNext = function() {
          var previousResult = _this.result;
          var result2 = obsQuery.getCurrentResult();
          if (previousResult && previousResult.loading === result2.loading && previousResult.networkStatus === result2.networkStatus && equal(previousResult.data, result2.data)) {
            return;
          }
          _this.setResult(result2);
        };
        var onError = function(error) {
          subscription.unsubscribe();
          subscription = obsQuery.resubscribeAfterError(onNext, onError);
          if (!hasOwnProperty.call(error, "graphQLErrors")) {
            throw error;
          }
          var previousResult = _this.result;
          if (!previousResult || previousResult && previousResult.loading || !equal(error, previousResult.error)) {
            _this.setResult({
              data: previousResult && previousResult.data,
              error,
              loading: false,
              networkStatus: NetworkStatus.error
            });
          }
        };
        var subscription = obsQuery.subscribe(onNext, onError);
        return function() {
          setTimeout(function() {
            return subscription.unsubscribe();
          });
          _this.forceUpdate = function() {
            return _this.forceUpdateState();
          };
        };
      }, [
        // We memoize the subscribe function using useCallback and the following
        // dependency keys, because the subscribe function reference is all that
        // useSyncExternalStore uses internally as a dependency key for the
        // useEffect ultimately responsible for the subscription, so we are
        // effectively passing this dependency array to that useEffect buried
        // inside useSyncExternalStore, as desired.
        obsQuery,
        this.renderPromises,
        this.client.disableNetworkFetches
      ]), function() {
        return _this.getCurrentResult();
      }, function() {
        return _this.getCurrentResult();
      });
      this.unsafeHandlePartialRefetch(result);
      return this.toQueryResult(result);
    };
    InternalState2.prototype.useOptions = function(options) {
      var _a;
      var watchQueryOptions = this.createWatchQueryOptions(this.queryHookOptions = options);
      var currentWatchQueryOptions = this.watchQueryOptions;
      if (!equal(watchQueryOptions, currentWatchQueryOptions)) {
        this.watchQueryOptions = watchQueryOptions;
        if (currentWatchQueryOptions && this.observable) {
          this.observable.reobserve(this.getObsQueryOptions());
          this.previousData = ((_a = this.result) === null || _a === void 0 ? void 0 : _a.data) || this.previousData;
          this.result = void 0;
        }
      }
      this.onCompleted = options.onCompleted || InternalState2.prototype.onCompleted;
      this.onError = options.onError || InternalState2.prototype.onError;
      if ((this.renderPromises || this.client.disableNetworkFetches) && this.queryHookOptions.ssr === false && !this.queryHookOptions.skip) {
        this.result = this.ssrDisabledResult;
      } else if (this.queryHookOptions.skip || this.watchQueryOptions.fetchPolicy === "standby") {
        this.result = this.skipStandbyResult;
      } else if (this.result === this.ssrDisabledResult || this.result === this.skipStandbyResult) {
        this.result = void 0;
      }
    };
    InternalState2.prototype.getObsQueryOptions = function() {
      var toMerge = [];
      var globalDefaults = this.client.defaultOptions.watchQuery;
      if (globalDefaults)
        toMerge.push(globalDefaults);
      if (this.queryHookOptions.defaultOptions) {
        toMerge.push(this.queryHookOptions.defaultOptions);
      }
      toMerge.push(compact(this.observable && this.observable.options, this.watchQueryOptions));
      return toMerge.reduce(mergeOptions);
    };
    InternalState2.prototype.createWatchQueryOptions = function(_a) {
      var _b;
      if (_a === void 0) {
        _a = {};
      }
      var skip = _a.skip, ssr = _a.ssr, onCompleted = _a.onCompleted, onError = _a.onError, defaultOptions = _a.defaultOptions, otherOptions = __rest(_a, ["skip", "ssr", "onCompleted", "onError", "defaultOptions"]);
      var watchQueryOptions = Object.assign(otherOptions, { query: this.query });
      if (this.renderPromises && (watchQueryOptions.fetchPolicy === "network-only" || watchQueryOptions.fetchPolicy === "cache-and-network")) {
        watchQueryOptions.fetchPolicy = "cache-first";
      }
      if (!watchQueryOptions.variables) {
        watchQueryOptions.variables = {};
      }
      if (skip) {
        var _c = watchQueryOptions.fetchPolicy, fetchPolicy = _c === void 0 ? this.getDefaultFetchPolicy() : _c, _d = watchQueryOptions.initialFetchPolicy, initialFetchPolicy = _d === void 0 ? fetchPolicy : _d;
        Object.assign(watchQueryOptions, {
          initialFetchPolicy,
          fetchPolicy: "standby"
        });
      } else if (!watchQueryOptions.fetchPolicy) {
        watchQueryOptions.fetchPolicy = ((_b = this.observable) === null || _b === void 0 ? void 0 : _b.options.initialFetchPolicy) || this.getDefaultFetchPolicy();
      }
      return watchQueryOptions;
    };
    InternalState2.prototype.getDefaultFetchPolicy = function() {
      var _a, _b;
      return ((_a = this.queryHookOptions.defaultOptions) === null || _a === void 0 ? void 0 : _a.fetchPolicy) || ((_b = this.client.defaultOptions.watchQuery) === null || _b === void 0 ? void 0 : _b.fetchPolicy) || "cache-first";
    };
    InternalState2.prototype.onCompleted = function(data) {
    };
    InternalState2.prototype.onError = function(error) {
    };
    InternalState2.prototype.useObservableQuery = function() {
      var obsQuery = this.observable = this.renderPromises && this.renderPromises.getSSRObservable(this.watchQueryOptions) || this.observable || // Reuse this.observable if possible (and not SSR)
      this.client.watchQuery(this.getObsQueryOptions());
      this.obsQueryFields = React2.useMemo(function() {
        return {
          refetch: obsQuery.refetch.bind(obsQuery),
          reobserve: obsQuery.reobserve.bind(obsQuery),
          fetchMore: obsQuery.fetchMore.bind(obsQuery),
          updateQuery: obsQuery.updateQuery.bind(obsQuery),
          startPolling: obsQuery.startPolling.bind(obsQuery),
          stopPolling: obsQuery.stopPolling.bind(obsQuery),
          subscribeToMore: obsQuery.subscribeToMore.bind(obsQuery)
        };
      }, [obsQuery]);
      var ssrAllowed = !(this.queryHookOptions.ssr === false || this.queryHookOptions.skip);
      if (this.renderPromises && ssrAllowed) {
        this.renderPromises.registerSSRObservable(obsQuery);
        if (obsQuery.getCurrentResult().loading) {
          this.renderPromises.addObservableQueryPromise(obsQuery);
        }
      }
      return obsQuery;
    };
    InternalState2.prototype.setResult = function(nextResult) {
      var previousResult = this.result;
      if (previousResult && previousResult.data) {
        this.previousData = previousResult.data;
      }
      this.result = nextResult;
      this.forceUpdate();
      this.handleErrorOrCompleted(nextResult, previousResult);
    };
    InternalState2.prototype.handleErrorOrCompleted = function(result, previousResult) {
      var _this = this;
      if (!result.loading) {
        var error_1 = this.toApolloError(result);
        Promise.resolve().then(function() {
          if (error_1) {
            _this.onError(error_1);
          } else if (result.data && (previousResult === null || previousResult === void 0 ? void 0 : previousResult.networkStatus) !== result.networkStatus && result.networkStatus === NetworkStatus.ready) {
            _this.onCompleted(result.data);
          }
        }).catch(function(error) {
          globalThis.__DEV__ !== false && invariant.warn(error);
        });
      }
    };
    InternalState2.prototype.toApolloError = function(result) {
      return isNonEmptyArray(result.errors) ? new ApolloError({ graphQLErrors: result.errors }) : result.error;
    };
    InternalState2.prototype.getCurrentResult = function() {
      if (!this.result) {
        this.handleErrorOrCompleted(this.result = this.observable.getCurrentResult());
      }
      return this.result;
    };
    InternalState2.prototype.toQueryResult = function(result) {
      var queryResult = this.toQueryResultCache.get(result);
      if (queryResult)
        return queryResult;
      var data = result.data, partial = result.partial, resultWithoutPartial = __rest(result, ["data", "partial"]);
      this.toQueryResultCache.set(result, queryResult = __assign(__assign(__assign({ data }, resultWithoutPartial), this.obsQueryFields), { client: this.client, observable: this.observable, variables: this.observable.variables, called: !this.queryHookOptions.skip, previousData: this.previousData }));
      if (!queryResult.error && isNonEmptyArray(result.errors)) {
        queryResult.error = new ApolloError({ graphQLErrors: result.errors });
      }
      return queryResult;
    };
    InternalState2.prototype.unsafeHandlePartialRefetch = function(result) {
      if (result.partial && this.queryHookOptions.partialRefetch && !result.loading && (!result.data || Object.keys(result.data).length === 0) && this.observable.options.fetchPolicy !== "cache-only") {
        Object.assign(result, {
          loading: true,
          networkStatus: NetworkStatus.refetch
        });
        this.observable.refetch();
      }
    };
    return InternalState2;
  }()
);

export {
  useQuery
};
//# sourceMappingURL=/build/_shared/chunk-VJGS4LNA.js.map
