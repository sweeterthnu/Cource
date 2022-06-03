(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-extensions', 'kotlin-react-core', 'react'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-extensions'), require('kotlin-react-core'), require('react'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-react-legacy'.");
    }if (typeof this['kotlin-extensions'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-legacy'. Its dependency 'kotlin-extensions' was not found. Please, check whether 'kotlin-extensions' is loaded prior to 'kotlin-react-legacy'.");
    }if (typeof this['kotlin-react-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-legacy'. Its dependency 'kotlin-react-core' was not found. Please, check whether 'kotlin-react-core' is loaded prior to 'kotlin-react-legacy'.");
    }if (typeof react === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-legacy'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-react-legacy'.");
    }root['kotlin-react-legacy'] = factory(typeof this['kotlin-react-legacy'] === 'undefined' ? {} : this['kotlin-react-legacy'], kotlin, this['kotlin-extensions'], this['kotlin-react-core'], react);
  }
}(this, function (_, Kotlin, $module$kotlin_extensions, $module$kotlin_react_core, $module$react) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var clone = $module$kotlin_extensions.kotlinext.js.clone_issdgt$;
  var Unit = Kotlin.kotlin.Unit;
  var createElement = $module$react.createElement;
  var get_react = $module$kotlin_react_core.react.get_react_2wnr96$;
  var Children = $module$react.Children;
  var addAll = Kotlin.kotlin.collections.addAll_ye1y7v$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var isValidElement = $module$react.isValidElement;
  var rawForwardRef = $module$react.forwardRef;
  RElementBuilderImpl.prototype = Object.create(RBuilderImpl.prototype);
  RElementBuilderImpl.prototype.constructor = RElementBuilderImpl;
  function fc$lambda$lambda(closure$func, closure$props) {
    return function ($receiver) {
      closure$func($receiver, closure$props);
      return Unit;
    };
  }
  function fc$lambda(closure$func) {
    return function (props) {
      return createElement_0(fc$lambda$lambda(closure$func, props));
    };
  }
  function fc(func) {
    var component = fc$lambda(func);
    return component;
  }
  function fc_0(displayName, func) {
    var $receiver = fc(func);
    $receiver.displayName = displayName;
    return $receiver;
  }
  function RBuilder() {
  }
  RBuilder.prototype.child_30b5ua$ = function (element) {
    this.childList.add_11rb$(element);
  };
  RBuilder.prototype.unaryPlus_m8hz4t$ = function ($receiver) {
    this.child_30b5ua$($receiver);
  };
  RBuilder.prototype.unaryPlus_pdl1vz$ = function ($receiver) {
    this.child_30b5ua$($receiver);
  };
  RBuilder.prototype.child_1mw94g$$default = function (type, props, handler) {
    if (handler == null) {
      this.child_30b5ua$(createElement(type, props));
      return;
    }var $receiver = RElementBuilder_0(props);
    handler($receiver);
    var children = copyToArray($receiver.childList);
    this.child_30b5ua$(createElement.apply(null, [type, props].concat(children)));
  };
  RBuilder.prototype.child_1mw94g$ = function (type, props, handler, callback$default) {
    if (props === void 0) {
      props = {};
    }if (handler === void 0)
      handler = null;
    callback$default ? callback$default(type, props, handler) : this.child_1mw94g$$default(type, props, handler);
  };
  RBuilder.prototype.invoke_r7bapy$ = function ($receiver) {
    this.child_30b5ua$(createElement($receiver));
  };
  RBuilder.prototype.invoke_qk0v40$ = function ($receiver, handler) {
    this.child_1mw94g$($receiver, void 0, handler);
  };
  function RBuilder$invoke$lambda(closure$value, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.value = closure$value;
      closure$handler($receiver);
      return Unit;
    };
  }
  RBuilder.prototype.invoke_snhqu5$ = function ($receiver, value, handler) {
    this.child_1mw94g$($receiver, void 0, RBuilder$invoke$lambda(value, handler));
  };
  function RBuilder$invoke$lambda$lambda$lambda(closure$handler, closure$value) {
    return function ($receiver) {
      closure$handler($receiver, closure$value);
      return Unit;
    };
  }
  function RBuilder$invoke$lambda$lambda(closure$handler) {
    return function (value) {
      return createElement_0(RBuilder$invoke$lambda$lambda$lambda(closure$handler, value));
    };
  }
  function RBuilder$invoke$lambda_0(closure$handler) {
    return function ($receiver) {
      $receiver.attrs.children = RBuilder$invoke$lambda$lambda(closure$handler);
      return Unit;
    };
  }
  RBuilder.prototype.invoke_c0v1gl$ = function ($receiver, handler) {
    this.child_1mw94g$($receiver, void 0, RBuilder$invoke$lambda_0(handler));
  };
  RBuilder.prototype.child_up9nw1$ = function (klazz, handler) {
    this.invoke_qk0v40$(get_react(klazz), handler);
  };
  RBuilder.prototype.children_w8hwhj$ = function ($receiver) {
    addAll(this.childList, Children.toArray($receiver.children));
  };
  RBuilder.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'RBuilder', interfaces: []};
  function RBuilder_0() {
    return new RBuilderImpl();
  }
  function RBuilderImpl() {
    this.childList_z394dm$_0 = ArrayList_init();
  }
  Object.defineProperty(RBuilderImpl.prototype, 'childList', {configurable: true, get: function () {
    return this.childList_z394dm$_0;
  }});
  RBuilderImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'RBuilderImpl', interfaces: [RBuilder]};
  function RElementBuilder() {
  }
  RElementBuilder.prototype.attrs_37755u$ = function (handler) {
    handler(this.attrs);
  };
  Object.defineProperty(RElementBuilder.prototype, 'key', {configurable: true, get: function () {
    throw IllegalStateException_init(''.toString());
  }, set: function (value) {
    this.attrs.key = value;
  }});
  Object.defineProperty(RElementBuilder.prototype, 'ref', {configurable: true, get: function () {
    throw IllegalStateException_init(''.toString());
  }, set: function (value) {
    this.attrs.ref = value;
  }});
  RElementBuilder.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'RElementBuilder', interfaces: [RBuilder]};
  function RElementBuilder_0(attrs) {
    return new RElementBuilderImpl(attrs);
  }
  function RElementBuilderImpl(attrs) {
    RBuilderImpl.call(this);
    this.attrs_rox8qs$_0 = attrs;
  }
  Object.defineProperty(RElementBuilderImpl.prototype, 'attrs', {get: function () {
    return this.attrs_rox8qs$_0;
  }});
  RElementBuilderImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'RElementBuilderImpl', interfaces: [RBuilderImpl, RElementBuilder]};
  function createElement_0(block) {
    var tmp$;
    var $receiver = RBuilder_0();
    block($receiver);
    var nodes = $receiver.childList;
    if (nodes.size === 0)
      tmp$ = null;
    else if (nodes.size === 1 && isValidElement(first(nodes))) {
      tmp$ = first(nodes);
    } else {
      tmp$ = createElement.apply(null, [$module$react.Fragment, void 0].concat(copyToArray(nodes)));
    }
    return tmp$;
  }
  function forwardRef$lambda$lambda(closure$handler, closure$props, closure$ref) {
    return function ($receiver) {
      closure$handler($receiver, closure$props, closure$ref);
      return Unit;
    };
  }
  function forwardRef$lambda(closure$handler) {
    return function (props, ref) {
      return createElement_0(forwardRef$lambda$lambda(closure$handler, props, ref));
    };
  }
  function forwardRef(handler) {
    return rawForwardRef(forwardRef$lambda(handler));
  }
  var package$react = _.react || (_.react = {});
  $$importsForInline$$['kotlin-extensions'] = $module$kotlin_extensions;
  package$react.fc_4mavxa$ = fc;
  package$react.fc_gcrbg4$ = fc_0;
  $$importsForInline$$['kotlin-react-core'] = $module$kotlin_react_core;
  package$react.RBuilder = RBuilder;
  package$react.createBuilder = RBuilder_0;
  package$react.RBuilderImpl = RBuilderImpl;
  package$react.RElementBuilder = RElementBuilder;
  package$react.RElementBuilder_4vdyb1$ = RElementBuilder_0;
  package$react.RElementBuilderImpl = RElementBuilderImpl;
  package$react.createElement_zepujl$ = createElement_0;
  $$importsForInline$$.react = $module$react;
  package$react.forwardRef_2tjgre$ = forwardRef;
  RBuilderImpl.prototype.child_30b5ua$ = RBuilder.prototype.child_30b5ua$;
  RBuilderImpl.prototype.child_1mw94g$$default = RBuilder.prototype.child_1mw94g$$default;
  RBuilderImpl.prototype.child_up9nw1$ = RBuilder.prototype.child_up9nw1$;
  RBuilderImpl.prototype.unaryPlus_m8hz4t$ = RBuilder.prototype.unaryPlus_m8hz4t$;
  RBuilderImpl.prototype.unaryPlus_pdl1vz$ = RBuilder.prototype.unaryPlus_pdl1vz$;
  RBuilderImpl.prototype.invoke_r7bapy$ = RBuilder.prototype.invoke_r7bapy$;
  RBuilderImpl.prototype.invoke_qk0v40$ = RBuilder.prototype.invoke_qk0v40$;
  RBuilderImpl.prototype.invoke_snhqu5$ = RBuilder.prototype.invoke_snhqu5$;
  RBuilderImpl.prototype.invoke_c0v1gl$ = RBuilder.prototype.invoke_c0v1gl$;
  RBuilderImpl.prototype.children_w8hwhj$ = RBuilder.prototype.children_w8hwhj$;
  RBuilderImpl.prototype.child_1mw94g$ = RBuilder.prototype.child_1mw94g$;
  RElementBuilder.prototype.child_30b5ua$ = RBuilder.prototype.child_30b5ua$;
  RElementBuilder.prototype.child_1mw94g$$default = RBuilder.prototype.child_1mw94g$$default;
  RElementBuilder.prototype.child_up9nw1$ = RBuilder.prototype.child_up9nw1$;
  RElementBuilder.prototype.unaryPlus_m8hz4t$ = RBuilder.prototype.unaryPlus_m8hz4t$;
  RElementBuilder.prototype.unaryPlus_pdl1vz$ = RBuilder.prototype.unaryPlus_pdl1vz$;
  RElementBuilder.prototype.invoke_r7bapy$ = RBuilder.prototype.invoke_r7bapy$;
  RElementBuilder.prototype.invoke_qk0v40$ = RBuilder.prototype.invoke_qk0v40$;
  RElementBuilder.prototype.invoke_snhqu5$ = RBuilder.prototype.invoke_snhqu5$;
  RElementBuilder.prototype.invoke_c0v1gl$ = RBuilder.prototype.invoke_c0v1gl$;
  RElementBuilder.prototype.children_w8hwhj$ = RBuilder.prototype.children_w8hwhj$;
  RElementBuilder.prototype.child_1mw94g$ = RBuilder.prototype.child_1mw94g$;
  RElementBuilderImpl.prototype.attrs_37755u$ = RElementBuilder.prototype.attrs_37755u$;
  Object.defineProperty(RElementBuilderImpl.prototype, 'key', Object.getOwnPropertyDescriptor(RElementBuilder.prototype, 'key'));
  Object.defineProperty(RElementBuilderImpl.prototype, 'ref', Object.getOwnPropertyDescriptor(RElementBuilder.prototype, 'ref'));
  RElementBuilderImpl.prototype.child_30b5ua$ = RElementBuilder.prototype.child_30b5ua$;
  RElementBuilderImpl.prototype.child_1mw94g$$default = RElementBuilder.prototype.child_1mw94g$$default;
  RElementBuilderImpl.prototype.child_up9nw1$ = RElementBuilder.prototype.child_up9nw1$;
  RElementBuilderImpl.prototype.unaryPlus_m8hz4t$ = RElementBuilder.prototype.unaryPlus_m8hz4t$;
  RElementBuilderImpl.prototype.unaryPlus_pdl1vz$ = RElementBuilder.prototype.unaryPlus_pdl1vz$;
  RElementBuilderImpl.prototype.invoke_r7bapy$ = RElementBuilder.prototype.invoke_r7bapy$;
  RElementBuilderImpl.prototype.invoke_qk0v40$ = RElementBuilder.prototype.invoke_qk0v40$;
  RElementBuilderImpl.prototype.invoke_snhqu5$ = RElementBuilder.prototype.invoke_snhqu5$;
  RElementBuilderImpl.prototype.invoke_c0v1gl$ = RElementBuilder.prototype.invoke_c0v1gl$;
  RElementBuilderImpl.prototype.children_w8hwhj$ = RElementBuilder.prototype.children_w8hwhj$;
  RElementBuilderImpl.prototype.child_1mw94g$ = RElementBuilder.prototype.child_1mw94g$;
  return _;
}));

//# sourceMappingURL=kotlin-react-legacy.js.map
