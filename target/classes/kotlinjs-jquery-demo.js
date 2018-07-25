if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kotlinjs-jquery-demo'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlinjs-jquery-demo'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'kotlinjs-jquery-demo'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'kotlinjs-jquery-demo'.");
}
this['kotlinjs-jquery-demo'] = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var set_style = $module$kotlinx_html_js.kotlinx.html.set_style_ueiko3$;
  var h1 = $module$kotlinx_html_js.kotlinx.html.h1_vmej1w$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var div = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  var div_0 = $module$kotlinx_html_js.kotlinx.html.js.div_wkomt5$;
  var append = $module$kotlinx_html_js.kotlinx.html.dom.append_k9bwru$;
  function main$lambda(f) {
    kotlinDslDoSomething();
    jqueryDoSomething();
    return Unit;
  }
  function main(args) {
    window.onload = main$lambda;
  }
  function kotlinDslDoSomething$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('I am a Header(Produced by Kotlin-HTML-DSL)');
    return Unit;
  }
  function kotlinDslDoSomething$lambda$lambda$lambda$lambda(closure$it, closure$suffixInfo) {
    return function ($receiver) {
      set_style($receiver, 'color:' + (closure$it % 2 === 0 ? 'green' : 'blue'));
      $receiver.unaryPlus_pdl1vz$('Line No.' + closure$it + closure$suffixInfo);
      return Unit;
    };
  }
  function kotlinDslDoSomething$lambda$lambda($receiver) {
    var suffixInfo = '(Produced by Kotlin-HTML-DSL)';
    set_id($receiver, 'body_div');
    set_style($receiver, 'text-align:center;');
    h1($receiver, void 0, kotlinDslDoSomething$lambda$lambda$lambda);
    var tmp$;
    tmp$ = (new IntRange(1, 10)).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      div($receiver, void 0, kotlinDslDoSomething$lambda$lambda$lambda$lambda(element, suffixInfo));
    }
    return Unit;
  }
  function kotlinDslDoSomething$lambda($receiver) {
    div_0($receiver, void 0, kotlinDslDoSomething$lambda$lambda);
    return Unit;
  }
  function kotlinDslDoSomething() {
    var tmp$;
    (tmp$ = document.body) != null ? append(tmp$, kotlinDslDoSomething$lambda) : null;
  }
  function jqueryDoSomething() {
    var j = jQuery;
    var text = ' [I am red, added by Kotlin-JQuery] ';
    j('#body_div').find('h1,div').append(j('<span>').css('color', 'red').text(text));
  }
  var package$net = _.net || (_.net = {});
  var package$yanzai = package$net.yanzai || (package$net.yanzai = {});
  package$yanzai.main_kand9s$ = main;
  package$yanzai.kotlinDslDoSomething = kotlinDslDoSomething;
  package$yanzai.jqueryDoSomething = jqueryDoSomething;
  main([]);
  Kotlin.defineModule('kotlinjs-jquery-demo', _);
  return _;
}(typeof this['kotlinjs-jquery-demo'] === 'undefined' ? {} : this['kotlinjs-jquery-demo'], kotlin, this['kotlinx-html-js']);

//# sourceMappingURL=kotlinjs-jquery-demo.js.map
