/* =====================================================================
   PIXEL DA META (Facebook / Instagram Ads)

   >>> COLE O ID DO SEU PIXEL ENTRE AS ASPAS ABAIXO (só os números) <<<
   Exemplo: var PIXEL_ID = "123456789012345";

   Enquanto estiver vazio, o pixel fica desligado e nada é enviado.
   ===================================================================== */
var PIXEL_ID = "1130259122727827";

(function () {
  if (!/^\d{10,20}$/.test(PIXEL_ID)) return; // sem ID válido = desligado

  /* Código base oficial da Meta */
  !function (f, b, e, v, n, t, s) {
    if (f.fbq) return; n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    };
    if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
    n.queue = []; t = b.createElement(e); t.async = !0;
    t.src = v; s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s)
  }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

  fbq('init', PIXEL_ID);
  fbq('track', 'PageView');

  /* InitiateCheckout: clique em qualquer botão que leve ao GG Checkout
     (funciona na página principal e na versão aberta pelo "← Voltar"). */
  var enviado = false;
  document.addEventListener('click', function (ev) {
    var a = ev.target && ev.target.closest && ev.target.closest('a[href*="ggcheckout.app"]');
    if (!a || enviado) return;
    enviado = true;
    fbq('track', 'InitiateCheckout');
  }, true);
})();
