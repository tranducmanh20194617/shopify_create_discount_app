import {
  useLazyRef,
  useMountedRef
} from "/build/_shared/chunk-HN52GLY7.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-TFSQ7PF6.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/fast-deep-equal/index.js
var require_fast_deep_equal = __commonJS({
  "node_modules/fast-deep-equal/index.js"(exports, module) {
    "use strict";
    module.exports = function equal(a, b) {
      if (a === b)
        return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor)
          return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i]))
              return false;
          return true;
        }
        if (a.constructor === RegExp)
          return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf)
          return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString)
          return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length)
          return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
            return false;
        for (i = length; i-- !== 0; ) {
          var key = keys[i];
          if (!equal(a[key], b[key]))
            return false;
        }
        return true;
      }
      return a !== a && b !== b;
    };
  }
});

// node_modules/isobject/index.js
var require_isobject = __commonJS({
  "node_modules/isobject/index.js"(exports, module) {
    "use strict";
    module.exports = function isObject(val) {
      return val != null && typeof val === "object" && Array.isArray(val) === false;
    };
  }
});

// node_modules/get-value/index.js
var require_get_value = __commonJS({
  "node_modules/get-value/index.js"(exports, module) {
    var isObject = require_isobject();
    module.exports = function(target, path, options) {
      if (!isObject(options)) {
        options = { default: options };
      }
      if (!isValidObject(target)) {
        return typeof options.default !== "undefined" ? options.default : target;
      }
      if (typeof path === "number") {
        path = String(path);
      }
      const isArray = Array.isArray(path);
      const isString = typeof path === "string";
      const splitChar = options.separator || ".";
      const joinChar = options.joinChar || (typeof splitChar === "string" ? splitChar : ".");
      if (!isString && !isArray) {
        return target;
      }
      if (isString && path in target) {
        return isValid(path, target, options) ? target[path] : options.default;
      }
      let segs = isArray ? path : split(path, splitChar, options);
      let len = segs.length;
      let idx = 0;
      do {
        let prop = segs[idx];
        if (typeof prop === "number") {
          prop = String(prop);
        }
        while (prop && prop.slice(-1) === "\\") {
          prop = join([prop.slice(0, -1), segs[++idx] || ""], joinChar, options);
        }
        if (prop in target) {
          if (!isValid(prop, target, options)) {
            return options.default;
          }
          target = target[prop];
        } else {
          let hasProp = false;
          let n = idx + 1;
          while (n < len) {
            prop = join([prop, segs[n++]], joinChar, options);
            if (hasProp = prop in target) {
              if (!isValid(prop, target, options)) {
                return options.default;
              }
              target = target[prop];
              idx = n - 1;
              break;
            }
          }
          if (!hasProp) {
            return options.default;
          }
        }
      } while (++idx < len && isValidObject(target));
      if (idx === len) {
        return target;
      }
      return options.default;
    };
    function join(segs, joinChar, options) {
      if (typeof options.join === "function") {
        return options.join(segs);
      }
      return segs[0] + joinChar + segs[1];
    }
    function split(path, splitChar, options) {
      if (typeof options.split === "function") {
        return options.split(path);
      }
      return path.split(splitChar);
    }
    function isValid(key, target, options) {
      if (typeof options.isValid === "function") {
        return options.isValid(key, target);
      }
      return true;
    }
    function isValidObject(val) {
      return isObject(val) || Array.isArray(val) || typeof val === "function";
    }
  }
});

// node_modules/@shopify/react-form/build/esm/hooks/field/field.mjs
var import_react2 = __toESM(require_react(), 1);
var import_fast_deep_equal = __toESM(require_fast_deep_equal(), 1);

// node_modules/@shopify/react-form/build/esm/utilities.mjs
var import_get_value = __toESM(require_get_value(), 1);
function isField(input) {
  return Boolean(input) && Object.prototype.hasOwnProperty.call(input, "value") && Object.prototype.hasOwnProperty.call(input, "onChange") && Object.prototype.hasOwnProperty.call(input, "onBlur") && Object.prototype.hasOwnProperty.call(input, "defaultValue");
}
function setObject(obj, path, value) {
  const [key, ...restPath] = path;
  if (key == null || obj === null || typeof obj !== "object") {
    return obj;
  }
  if (!restPath.length) {
    obj[key] = value;
    return obj;
  }
  if (typeof obj[key] === "undefined") {
    obj[key] = typeof restPath[0] === "number" ? [] : {};
  }
  obj[key] = setObject(obj[key], restPath, value);
  return obj;
}
function normalizeValidation(input) {
  return Array.isArray(input) ? input : [input];
}
function isChangeEvent(value) {
  return typeof value === "object" && value !== null && Reflect.has(value, "target") && Reflect.has(value.target, "value");
}
function propagateErrors(fieldBag, errors) {
  errors.forEach((error) => {
    if (error.field == null) {
      return;
    }
    const got = (0, import_get_value.default)(fieldBag, error.field);
    if (got && isField(got)) {
      if (got.error !== error.message) {
        got.setError(error.message);
      }
    }
  });
}
function reduceFields(fieldBag, reduceFn, initialValue, reduceEmptyFn = (value) => value) {
  return function reduceField(accumulator, item, path) {
    if (isField(item)) {
      return reduceFn(accumulator, item, path, fieldBag);
    }
    if (Array.isArray(item) && item.length) {
      return item.reduce((_accumulator, value, index) => reduceField(_accumulator, value, path.concat(index)), accumulator);
    }
    if (typeof item === "object" && item !== null) {
      const entries = Object.entries(item);
      if (entries.length) {
        return entries.reduce((_accumulator, [key, value]) => reduceField(_accumulator, value, path.concat(key)), accumulator);
      }
    }
    return reduceEmptyFn(accumulator, item, path, fieldBag);
  }(initialValue, fieldBag, []);
}
function validateAll(fieldBag) {
  return reduceFields(fieldBag, (errors, field) => {
    const message = field.runValidation();
    return message ? errors.concat({
      message
    }) : errors;
  }, []);
}
function getValues(fieldBag) {
  return reduceFields(fieldBag, (formValue, field, path) => setObject(formValue, path, field.value), {}, (formValue, value, path) => setObject(formValue, path, value));
}
function shallowArrayComparison(arrA, arrB) {
  if (arrA === arrB) {
    return true;
  }
  if (!arrA || !arrB) {
    return false;
  }
  const len = arrA.length;
  if (arrB.length !== len) {
    return false;
  }
  for (let i = 0; i < len; i++) {
    if (arrA[i] !== arrB[i]) {
      return false;
    }
  }
  return true;
}
function defaultDirtyComparator(defaultValue, newValue) {
  return Array.isArray(defaultValue) ? !shallowArrayComparison(defaultValue, newValue) : defaultValue !== newValue;
}
function makeCleanFields(fieldBag) {
  reduceFields(fieldBag, (_, field) => field.newDefaultValue(field.value));
}
function makeCleanDynamicLists(dynamicLists) {
  if (dynamicLists) {
    Object.values(dynamicLists).forEach((dynamicList) => {
      dynamicList.newDefaultValue(dynamicList.value);
    });
  }
}

// node_modules/@shopify/react-form/build/esm/hooks/field/reducer.mjs
var import_react = __toESM(require_react(), 1);
function updateAction(value) {
  return {
    type: "update",
    payload: value
  };
}
function resetAction() {
  return {
    type: "reset"
  };
}
function newDefaultAction(value) {
  return {
    type: "newDefaultValue",
    payload: value
  };
}
function updateErrorAction(error) {
  return {
    type: "updateError",
    payload: error
  };
}
var shallowFieldReducer = makeFieldReducer({
  dirtyStateComparator: defaultDirtyComparator
});
function makeFieldReducer({
  dirtyStateComparator = defaultDirtyComparator
}) {
  return (state, action) => {
    switch (action.type) {
      case "update": {
        const newValue = action.payload;
        const {
          defaultValue
        } = state;
        const dirty = dirtyStateComparator(defaultValue, newValue);
        return {
          ...state,
          dirty,
          value: newValue,
          touched: true
        };
      }
      case "updateError": {
        const payload = Array.isArray(action.payload) ? action.payload : [action.payload];
        const [firstError] = payload;
        const allErrors = firstError ? payload : [];
        if (shallowArrayComparison(allErrors, state.allErrors)) {
          return {
            ...state,
            error: firstError
          };
        } else {
          return {
            ...state,
            error: firstError,
            allErrors
          };
        }
      }
      case "reset": {
        const {
          defaultValue
        } = state;
        return {
          ...state,
          error: void 0,
          value: defaultValue,
          dirty: false,
          touched: false,
          allErrors: []
        };
      }
      case "newDefaultValue": {
        const newDefaultValue = action.payload;
        return {
          ...state,
          error: void 0,
          value: newDefaultValue,
          defaultValue: newDefaultValue,
          touched: false,
          dirty: false
        };
      }
    }
  };
}
function useFieldReducer(value, dirtyStateComparator) {
  return (0, import_react.useReducer)(makeFieldReducer({
    dirtyStateComparator
  }), initialFieldState(value));
}
function initialFieldState(value) {
  return {
    value,
    defaultValue: value,
    error: void 0,
    touched: false,
    dirty: false,
    allErrors: []
  };
}

// node_modules/@shopify/react-form/build/esm/hooks/field/field.mjs
function useField(input, dependencies = []) {
  const {
    value,
    validates,
    dirtyStateComparator
  } = normalizeFieldConfig(input);
  const validators = normalizeValidation(validates);
  const [state, dispatch] = useFieldReducer(value, dirtyStateComparator);
  const resetActionObject = (0, import_react2.useMemo)(() => resetAction(), []);
  const reset = (0, import_react2.useCallback)(() => dispatch(resetActionObject), [dispatch, resetActionObject]);
  const newDefaultValue = (0, import_react2.useCallback)((value2) => dispatch(newDefaultAction(value2)), [dispatch]);
  const runValidation = (0, import_react2.useCallback)(
    (value2 = state.value) => {
      const errors = validators.map((check) => check(value2, {})).filter((value3) => value3 != null);
      if (errors && errors.length > 0) {
        const [firstError] = errors;
        dispatch(updateErrorAction(errors));
        return firstError;
      }
      dispatch(updateErrorAction(void 0));
      return void 0;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state.value, ...dependencies]
  );
  const onChange = (0, import_react2.useCallback)((value2) => {
    const normalizedValue = isChangeEvent(value2) ? value2.target.value : value2;
    dispatch(updateAction(normalizedValue));
    if (state.error) {
      runValidation(normalizedValue);
    }
  }, [runValidation, state.error, dispatch]);
  const setError = (0, import_react2.useCallback)((value2) => dispatch(updateErrorAction(value2)), [dispatch]);
  const onBlur = (0, import_react2.useCallback)(() => {
    if (state.touched === false && state.error == null) {
      return;
    }
    runValidation();
  }, [runValidation, state.touched, state.error]);
  (0, import_react2.useEffect)(() => {
    if (!(0, import_fast_deep_equal.default)(value, state.defaultValue)) {
      newDefaultValue(value);
    }
  }, [value, newDefaultValue]);
  const field = (0, import_react2.useMemo)(() => {
    return {
      ...state,
      onBlur,
      onChange,
      newDefaultValue,
      runValidation,
      setError,
      reset
    };
  }, [state, onBlur, onChange, newDefaultValue, runValidation, setError, reset]);
  return field;
}
function normalizeFieldConfig(input) {
  if (isFieldConfig(input)) {
    return input;
  }
  return {
    value: input,
    validates: () => void 0
  };
}
function isFieldConfig(input) {
  return input != null && typeof input === "object" && Reflect.has(input, "value") && Reflect.has(input, "validates");
}

// node_modules/@shopify/react-form/build/esm/hooks/form.mjs
var import_react6 = __toESM(require_react(), 1);

// node_modules/@shopify/react-form/build/esm/hooks/dirty.mjs
function useDirty(fieldBag) {
  return reduceFields(fieldBag, (dirty, field) => dirty || field.dirty, false);
}

// node_modules/@shopify/react-form/build/esm/hooks/visitFields.mjs
var import_react3 = __toESM(require_react(), 1);
function useVisitFields(fieldBag, visitor) {
  const fieldBagRef = (0, import_react3.useRef)(fieldBag);
  fieldBagRef.current = fieldBag;
  return (0, import_react3.useCallback)(() => {
    reduceFields(fieldBagRef.current, (_, field) => visitor(field));
  }, [visitor]);
}

// node_modules/@shopify/react-form/build/esm/hooks/reset.mjs
function useReset(fieldBag) {
  return useVisitFields(fieldBag, resetField);
}
function resetField(field) {
  field.reset();
}

// node_modules/@shopify/react-form/build/esm/hooks/submit.mjs
var import_react4 = __toESM(require_react(), 1);
function useSubmit(onSubmit = noopSubmission, fieldBag, makeCleanAfterSubmit = false, dynamicListBag) {
  const mounted = useMountedRef();
  const [submitting, setSubmitting] = (0, import_react4.useState)(false);
  const [submitErrors, setSubmitErrors] = (0, import_react4.useState)([]);
  const fieldBagRef = useLazyRef(() => fieldBag);
  fieldBagRef.current = fieldBag;
  const dynamicListBagRef = useLazyRef(() => dynamicListBag);
  const setErrors = (0, import_react4.useCallback)((errors) => {
    setSubmitErrors(errors);
    propagateErrors(fieldBagRef.current, errors);
  }, [fieldBagRef]);
  const submit = (0, import_react4.useCallback)(async (event) => {
    const fields = fieldBagRef.current;
    const dynamicLists = dynamicListBagRef.current;
    if (event && event.preventDefault && !event.defaultPrevented) {
      event.preventDefault();
    }
    const clientErrors = validateAll(fields);
    if (clientErrors.length > 0) {
      setErrors(clientErrors);
      return;
    }
    setSubmitting(true);
    const result = await onSubmit(getValues(fields));
    if (mounted.current === false) {
      return;
    }
    setSubmitting(false);
    if (result.status === "fail") {
      setErrors(result.errors);
    } else {
      setSubmitErrors([]);
      if (makeCleanAfterSubmit) {
        makeCleanFields(fields);
        makeCleanDynamicLists(dynamicLists);
      }
    }
  }, [fieldBagRef, dynamicListBagRef, onSubmit, mounted, setErrors, makeCleanAfterSubmit]);
  return {
    submit,
    submitting,
    errors: submitErrors,
    setErrors
  };
}
function submitSuccess() {
  return {
    status: "success"
  };
}
function noopSubmission(_) {
  return Promise.resolve(submitSuccess());
}

// node_modules/@shopify/react-form/build/esm/hooks/list/dynamiclistdirty.mjs
function useDynamicListDirty(lists) {
  return lists ? Object.entries(lists).some(([key]) => lists[key].dirty) : false;
}

// node_modules/@shopify/react-form/build/esm/hooks/list/dynamiclistreset.mjs
var import_react5 = __toESM(require_react(), 1);
function useDynamicListReset(lists) {
  const listBagRef = useLazyRef(() => lists);
  listBagRef.current = lists;
  return (0, import_react5.useCallback)(() => {
    return resetFields(listBagRef.current);
  }, [listBagRef]);
}
function resetFields(lists) {
  if (lists) {
    Object.entries(lists).forEach(([key]) => lists[key].reset());
  }
}

// node_modules/@shopify/react-form/build/esm/hooks/form.mjs
function useForm({
  fields,
  dynamicLists,
  onSubmit,
  makeCleanAfterSubmit = false
}) {
  const fieldsWithLists = (0, import_react6.useMemo)(() => {
    if (dynamicLists) {
      const fieldsWithList = {
        ...fields
      };
      Object.entries(dynamicLists).forEach(([key, value]) => {
        fieldsWithList[key] = value.fields;
      });
      return fieldsWithList;
    }
    return fields;
  }, [dynamicLists, fields]);
  const dirty = useDirty(fieldsWithLists);
  const basicReset = useReset(fieldsWithLists);
  const dynamicListDirty = useDynamicListDirty(dynamicLists);
  const dynamicListReset = useDynamicListReset(dynamicLists);
  const {
    submit,
    submitting,
    errors,
    setErrors
  } = useSubmit(onSubmit, fieldsWithLists, makeCleanAfterSubmit, dynamicLists);
  const reset = (0, import_react6.useCallback)(() => {
    setErrors([]);
    basicReset();
    dynamicListReset();
  }, [basicReset, dynamicListReset, setErrors]);
  const fieldsRef = useLazyRef(() => fieldsWithLists);
  fieldsRef.current = fieldsWithLists;
  const dynamicListsRef = useLazyRef(() => dynamicLists);
  const validate = (0, import_react6.useCallback)(() => {
    return validateAll(fieldsRef.current);
  }, [fieldsRef]);
  const makeClean = (0, import_react6.useCallback)(() => {
    makeCleanFields(fieldsRef.current);
    makeCleanDynamicLists(dynamicListsRef.current);
  }, [dynamicListsRef, fieldsRef]);
  const form = {
    fields,
    dirty: dirty || dynamicListDirty,
    submitting,
    submit,
    reset,
    validate,
    makeClean,
    submitErrors: errors
  };
  if (dynamicLists) {
    return {
      ...form,
      dynamicLists
    };
  }
  return form;
}

// app/const/Function.ts
init_remix_hmr();
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/const/Function.ts"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/const/Function.ts"
  );
  import.meta.hot.lastModified = "1712928126070.8713";
}
var Function = () => {
  const validateNumber = (value) => {
    if (isNaN(parseFloat(value)) || parseFloat(value) <= 0) {
      return 1;
    }
    return 2;
  };
  const validatePercentage = (value) => {
    if (isNaN(parseFloat(value)) || parseFloat(value) < 0 || parseFloat(value) >= 100) {
      return 1;
    }
    return 2;
  };
  return {
    validateNumber,
    validatePercentage
  };
};
_c = Function;
var _c;
$RefreshReg$(_c, "Function");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  useField,
  useForm,
  Function
};
/*! Bundled license information:

isobject/index.js:
  (*!
   * isobject <https://github.com/jonschlinkert/isobject>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   *)

get-value/index.js:
  (*!
   * get-value <https://github.com/jonschlinkert/get-value>
   *
   * Copyright (c) 2014-2018, Jon Schlinkert.
   * Released under the MIT License.
   *)
*/
//# sourceMappingURL=/build/_shared/chunk-E2CTCRX3.js.map
