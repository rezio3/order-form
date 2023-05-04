// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6fRhY":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d7fe96c059a40e7a";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lRBv":[function(require,module,exports) {
// This file handles all user events operations on every form page by adding event listeners for them
var _product = require("./product");
var _pages = require("./pages");
var _previewsOnPages = require("./previewsOnPages");
var _pagesModifiers = require("./pagesModifiers");
var _summaryProduct = require("./summaryProduct");
var _clientDataForm = require("./clientDataForm");
var _validateWholeForm = require("./validateWholeForm");
var _summaryPreview = require("./summaryPreview");
var _deliveryData = require("./deliveryData");
var _validateDeliveryAddressInputs = require("./validateDeliveryAddressInputs");
var _finalOrderSummary = require("./finalOrderSummary");
var _order = require("./order");
var _thankYouPage = require("./thankYouPage");
// Initialize order form
(0, _summaryPreview.updateSummaryPreview)();
// Page nav buttons
const pageButtonNext = document.querySelector("#next-btn");
const pageButtonBack = document.querySelector("#back-btn");
pageButtonBack.addEventListener("click", (0, _pages.pages).changePage);
pageButtonNext.addEventListener("click", (0, _pages.pages).changePage);
// choose print location inputs on page 1
const inputsChooseLocation = document.querySelectorAll(".choose-print-location .checkboxes-list__checkbox");
inputsChooseLocation.forEach((e)=>{
    e.addEventListener("change", (item)=>{
        const location1 = item.target.getAttribute("data-location");
        (0, _product.product).setPrintLocation(location1);
        (0, _previewsOnPages.previewsOnPages).setLocationPreviewImg();
        (0, _summaryPreview.updateSummaryPreview)();
    });
});
// Graphics selection arrow-buttons on page 2
const chooseGraphicsBtnLeft = document.querySelector("#choose-graphics-left");
const chooseGraphicsBtnRight = document.querySelector("#choose-graphics-right");
chooseGraphicsBtnLeft.addEventListener("click", (0, _product.product).setGraphics);
chooseGraphicsBtnRight.addEventListener("click", (0, _product.product).setGraphics);
// choose effect inputs on page 3
const inputsChooseEffect = document.querySelectorAll(".choose-effect .checkboxes-list__checkbox");
inputsChooseEffect.forEach((e)=>{
    e.addEventListener("change", (item)=>{
        const effect = item.target.getAttribute("data-effect");
        (0, _product.product).setEffect(effect);
        (0, _previewsOnPages.previewsOnPages).setEffectPreviewImg();
        (0, _pagesModifiers.pagesModifiers).setBlurPowerSetting(effect);
    });
});
// Blur buttons
const blurChangeButtons = document.querySelectorAll(".select-blur-power__blur-power-button");
const powerNumberSpan = document.querySelector(".select-blur-power__blur-power-number");
blurChangeButtons.forEach((e)=>{
    e.addEventListener("click", (item)=>{
        let blurPowerNumber = Number((0, _product.product).blurPower);
        if (item.target.innerHTML === "-" && blurPowerNumber > 1) {
            blurPowerNumber -= 1;
            powerNumberSpan.innerHTML = blurPowerNumber;
        } else if (item.target.innerHTML === "+" && blurPowerNumber < 10) {
            blurPowerNumber += 1;
            powerNumberSpan.innerHTML = blurPowerNumber;
        }
        (0, _product.product).setBlurPower(blurPowerNumber);
    });
});
// edit buttons on pages 4 and 7 - product summary and final summary
const editButtons = document.querySelectorAll(".summary-setting-and-approval__edit-btn");
editButtons.forEach((e)=>{
    e.addEventListener("click", (item)=>{
        pageButtonNext.disabled = false;
        (0, _pages.pages).activePage = Number(item.target.name);
        if ((0, _pages.pages).activePage !== 1) pageButtonBack.classList.remove("navigate-buttons__btn--disabled");
        (0, _pages.pages).changePageDisplay((0, _pages.pages).activePage);
        if ((0, _finalOrderSummary.finalOrderSummary).finalizationOfOrder) (0, _pagesModifiers.pagesModifiers).showGoToFinalCheckoutButton();
        // changing graphics when editing "choose effect" page
        if (item.target.name === "3") (0, _previewsOnPages.previewsOnPages).setEffectPreviewImg();
    });
});
// approval product settings on page 4
const approveCheckboxes = document.querySelectorAll(".summary-setting-and-approval__checkbox");
approveCheckboxes.forEach((e)=>{
    e.addEventListener("change", (item)=>{
        (0, _summaryProduct.summaryProduct).validateProductSummaryCheckboxes(item);
        (0, _pagesModifiers.pagesModifiers).goToCheckoutButtonSwitch();
    });
});
// Client data inputs handler
const clientDataInputs = document.querySelectorAll(".client-data-list__input");
clientDataInputs.forEach((input)=>{
    input.addEventListener("input", (e)=>{
        (0, _clientDataForm.clientForm).handleFormInputs(e);
    });
});
// Form submit handler
const submitButton = {
    target: document.querySelector("#next-form-btn")
};
const form = document.querySelector(".client-data-form");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    (0, _validateWholeForm.validateForm)();
    if ((0, _clientDataForm.clientForm).isFormValid) (0, _pages.pages).changePage(submitButton);
    else {
        // alert button animation at form page
        submitButton.target.classList.add("client-data-form__btn--alert");
        setTimeout(()=>{
            submitButton.target.classList.remove("client-data-form__btn--alert");
        }, 500);
    }
});
// delivery method checkboxes
const deliveryCheckboxes = document.querySelectorAll(".delivery-wrapper .checkboxes-list__delivery-checkbox");
deliveryCheckboxes.forEach((e)=>{
    e.addEventListener("change", (item)=>{
        const deliveryMethod = item.target.getAttribute("data-delivery");
        (0, _deliveryData.delivery).method = deliveryMethod;
        if (deliveryMethod === "Wysyłka") (0, _deliveryData.delivery).switchAddressFormIfDelivery("delivery");
        else (0, _deliveryData.delivery).switchAddressFormIfDelivery("pickup");
    });
});
// Delivery address inputs handler
const deliveryAddressInputs = document.querySelectorAll(".delivery-form__input");
deliveryAddressInputs.forEach((e)=>{
    e.addEventListener("input", (item)=>{
        (0, _validateDeliveryAddressInputs.validateAddressInputs)(item, "delivery address");
    });
});
// Submit delivery address handler
const submitDeliveryButton = {
    target: document.querySelector(".delivery-page__btn")
};
submitDeliveryButton.target.addEventListener("click", ()=>{
    (0, _deliveryData.delivery).validateAddressForm();
    if ((0, _deliveryData.delivery).isDeliveryAddressValid || (0, _deliveryData.delivery).method === "Odbi\xf3r osobisty") {
        (0, _pages.pages).changePage(submitDeliveryButton);
        (0, _finalOrderSummary.finalOrderSummary).showFinalOrderSummary();
    } else {
        // alert button animation at delivery page
        submitDeliveryButton.target.classList.add("delivery-page__btn--alert");
        setTimeout(()=>{
            submitDeliveryButton.target.classList.remove("delivery-page__btn--alert");
        }, 500);
    }
});
// delivery - the same address button
const sameAddressButton = document.querySelector(".same-address-btn");
sameAddressButton.addEventListener("click", (0, _deliveryData.delivery).setTheSameAddress);
// handle final approvals
const finalApprovalsCheckboxes = document.querySelectorAll(".final-approval");
finalApprovalsCheckboxes.forEach((e)=>{
    e.addEventListener("change", (item)=>{
        (0, _finalOrderSummary.finalOrderSummary).validateFinalSummaryApprovals(item);
    });
});
// order submit button
const orderSubmitButton = {
    target: document.querySelector(".submit-order-btn")
};
orderSubmitButton.target.addEventListener("click", ()=>{
    const order = (0, _order.createNewOrder)({
        product: (0, _product.product),
        clientForm: (0, _clientDataForm.clientForm),
        delivery: (0, _deliveryData.delivery),
        finalOrderSummary: (0, _finalOrderSummary.finalOrderSummary)
    });
    console.log(order);
    (0, _pages.pages).changePage(orderSubmitButton);
    (0, _thankYouPage.loadOrderInfoToThankYouPage)(order);
});
// Thank you page button - refreshes whole website
const keepBuyingButton = document.querySelector(".keep-buying-btn");
keepBuyingButton.addEventListener("click", ()=>{
    location.reload();
}); //

},{"./product":"5J9JY","./pages":"cXZuu","./previewsOnPages":"9CuRE","./pagesModifiers":"fmThx","./summaryProduct":"7cEGc","./clientDataForm":"8t8UO","./validateWholeForm":"9U4xO","./summaryPreview":"8CVKo","./deliveryData":"bsMhY","./validateDeliveryAddressInputs":"91FU1","./finalOrderSummary":"5P07n","./order":"c1Wl4","./thankYouPage":"dIhK3"}],"5J9JY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "product", ()=>product);
var _summaryPreview = require("./summaryPreview");
var _previewsOnPages = require("./previewsOnPages");
const prices = {
    frontOrBack: 10,
    frontAndBack: 20,
    grayscaleEffect: 2,
    blurEffect: 3
};
const product = {
    type: "T-shirt",
    printLocation: "Prz\xf3d",
    effect: "Brak",
    price: 10,
    graphics: 110,
    blurPower: "",
    setPrintLocation: (location)=>{
        product.printLocation = location;
        product.setPrice();
        (0, _summaryPreview.updateSummaryPreview)();
    },
    setGraphics: (e)=>{
        product.graphics += e.target.name === "right" ? 1 : -1;
        (0, _previewsOnPages.previewsOnPages).setGraphicsPreview();
        (0, _summaryPreview.updateSummaryPreview)();
    },
    setEffect: (effect)=>{
        product.effect = effect;
        product.setPrice();
        (0, _summaryPreview.updateSummaryPreview)();
    },
    setBlurPower: (powerUpdate)=>{
        if (product.effect === "Rozmycie") product.blurPower = powerUpdate;
        else product.blurPower = "";
        (0, _previewsOnPages.previewsOnPages).setEffectPreviewImg();
    },
    setPrice: ()=>{
        product.price = product.printLocation === "Prz\xf3d i tył" ? prices.frontAndBack : prices.frontOrBack;
        if (product.effect === "Czarno-białe") product.price += prices.grayscaleEffect;
        else if (product.effect === "Rozmycie") product.price += prices.blurEffect;
    }
};

},{"./summaryPreview":"8CVKo","./previewsOnPages":"9CuRE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8CVKo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateSummaryPreview", ()=>updateSummaryPreview);
var _product = require("./product");
const updateSummaryPreview = (effectURLcode)=>{
    const { printLocation , effect , price , blurPower  } = (0, _product.product);
    const summaryLocationSpan = document.querySelector(".summary-preview__location");
    const summaryEffectSpan = document.querySelector(".summary-preview__effect");
    const summaryCostSpan = document.querySelector(".summary-preview__cost");
    const printPreview = document.querySelector(".print-location-preview");
    const copyOfPrintPreview = printPreview.cloneNode(true);
    const blur = effect === "Rozmycie" ? ` ${blurPower}` : "";
    summaryLocationSpan.innerHTML = printLocation;
    summaryEffectSpan.innerHTML = effect + blur;
    summaryCostSpan.innerHTML = `${price} PLN`;
    // set print in summary preview
    const summaryPrintPreview = document.querySelector(".print-summary-preview");
    const summaryToRemove = document.querySelector(".print-summary-preview .print-location-preview");
    if (summaryToRemove !== null) summaryPrintPreview.removeChild(summaryToRemove);
    summaryPrintPreview.appendChild(copyOfPrintPreview);
    // set chosen graphics
    const chosenGraphics = summaryPrintPreview.querySelectorAll("img");
    const effectData = effectURLcode !== undefined ? effectURLcode : "";
    chosenGraphics.forEach((e)=>{
        // console.log(effectURLcode);
        e.src = `https://picsum.photos/id/${(0, _product.product).graphics}/170/170${effectData}`;
    });
};

},{"./product":"5J9JY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"9CuRE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "previewsOnPages", ()=>previewsOnPages);
var _summaryPreview = require("./summaryPreview");
var _product = require("./product");
const imgPreview = document.querySelector(".print-location-preview__print-img");
const frontShirt = document.querySelector(".print-location-preview__shirt-front");
const backShirt = document.querySelector(".print-location-preview__shirt-back");
const previewsOnPages = {
    setLocationPreviewImg: ()=>{
        const { printLocation  } = (0, _product.product);
        if (printLocation === "Prz\xf3d") {
            backShirt.innerHTML = "";
            frontShirt.appendChild(imgPreview);
        } else if (printLocation === "Tył") {
            frontShirt.innerHTML = "";
            backShirt.appendChild(imgPreview);
        } else if (printLocation === "Prz\xf3d i tył") {
            const imgClone = imgPreview.cloneNode(true);
            frontShirt.appendChild(imgPreview);
            backShirt.appendChild(imgClone);
        }
    },
    setEffectPreviewImg: ()=>{
        const effectPreviewImg = document.querySelector("#effect-preview");
        let effect;
        let blur;
        if ((0, _product.product).effect === "Czarno-białe") {
            blur = "";
            effect = "?grayscale";
        } else if ((0, _product.product).effect === "Rozmycie") {
            blur = `=${(0, _product.product).blurPower}`;
            effect = "?blur";
        } else {
            blur = "";
            effect = "";
        }
        (0, _product.product).effectCode = `${effect + blur}`;
        effectPreviewImg.src = `https://picsum.photos/id/${(0, _product.product).graphics}/170/170${effect + blur}`;
        (0, _summaryPreview.updateSummaryPreview)((0, _product.product).effectCode);
    },
    setGraphicsPreview: ()=>{
        const graphicsImg = document.querySelector(".choose-graphics-img");
        graphicsImg.src = `https://picsum.photos/id/${(0, _product.product).graphics}/170/170`;
    }
};

},{"./summaryPreview":"8CVKo","./product":"5J9JY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cXZuu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pages", ()=>pages);
var _summaryProduct = require("./summaryProduct");
var _previewsOnPages = require("./previewsOnPages");
var _pagesModifiers = require("./pagesModifiers");
var _finalOrderSummary = require("./finalOrderSummary");
const pagesElements = document.querySelectorAll(".form-page");
const pageButtonBack = document.querySelector("#back-btn");
const pageButtonNext = document.querySelector("#next-btn");
const pages = {
    activePage: 1,
    changePage: (btn)=>{
        if (btn.target.name === "next") {
            pageButtonBack.classList.remove("navigate-buttons__btn--disabled");
            pages.activePage += 1;
            if (pages.activePage === 4) (0, _summaryProduct.summaryProduct).setSummaryProductPage();
        } else if (btn.target.name === "back" && pages.activePage > 2) pages.activePage -= 1;
        else if (btn.target.name === "back" && pages.activePage === 2) {
            pages.activePage -= 1;
            pageButtonBack.classList.add("navigate-buttons__btn--disabled");
        } else if (btn.target.name === "go-to-final-checkout") {
            pages.activePage = 7;
            (0, _finalOrderSummary.finalOrderSummary).showFinalOrderSummary();
        }
        pages.changePageDisplay(pages.activePage);
        if (pages.activePage === 3) (0, _previewsOnPages.previewsOnPages).setEffectPreviewImg();
    },
    changePageDisplay: (activePage)=>{
        const summaryPreview = document.querySelector(".summary-preview");
        const redNotification = document.querySelector(".navigate-section__notification");
        // in case when user reach finalization order
        // and go back to edit product settings
        if (activePage < 4 && (0, _finalOrderSummary.finalOrderSummary).finalizationOfOrder) {
            pageButtonNext.classList.remove("navigate-buttons__btn--disabled");
            summaryPreview.classList.remove("summary-preview--disable");
            pageButtonBack.classList.add("navigate-buttons__btn--disabled");
        } else if (activePage === 7) {
            // remove summary preview box and navigate buttons after editing
            const summaryPreview = document.querySelector(".summary-preview");
            (0, _pagesModifiers.pagesModifiers).hideNavigateButtonAtFinalOrderSummary(summaryPreview, pageButtonBack);
        // other modifiers when finalization order is not reached yet
        } else if (activePage === 4) {
            summaryPreview.classList.add("summary-preview--disable");
            pageButtonBack.classList.add("navigate-buttons__btn--disabled");
            (0, _pagesModifiers.pagesModifiers).showCheckoutButton();
            (0, _pagesModifiers.pagesModifiers).goToCheckoutButtonSwitch();
        } else if (activePage >= 5) {
            pageButtonNext.classList.add("navigate-buttons__btn--disabled");
            pageButtonBack.classList.add("navigate-buttons__btn--disabled");
        } else {
            (0, _pagesModifiers.pagesModifiers).showNextButton();
            summaryPreview.classList.remove("summary-preview--disable");
            redNotification.classList.add("navigate-section__notification--disabled");
        }
        pagesElements.forEach((e)=>e.classList.remove("form-page--active"));
        pagesElements[activePage - 1].classList.add("form-page--active");
    }
};

},{"./summaryProduct":"7cEGc","./previewsOnPages":"9CuRE","./pagesModifiers":"fmThx","./finalOrderSummary":"5P07n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7cEGc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "summaryProduct", ()=>summaryProduct);
var _product = require("./product");
const summaryProduct = {
    isPrintLocationApproved: false,
    isGraphicsApproved: false,
    isEffectApproved: false,
    setSummaryProductPage: ()=>{
        // set t-shirt img
        const printPreview = document.querySelector(".print-location-preview");
        const copyOfPrintPreview = printPreview.cloneNode(true);
        copyOfPrintPreview.classList.add("shirt-preview-summary-product");
        const tshirtSummaryImg = document.querySelector(".t-shirt-summary-view");
        const previewToRemove = tshirtSummaryImg.querySelector(".shirt-preview-summary-product");
        if (previewToRemove !== null) tshirtSummaryImg.removeChild(previewToRemove);
        tshirtSummaryImg.appendChild(copyOfPrintPreview);
        // set particular graphics on t-shirt
        const chosenGraphics = tshirtSummaryImg.querySelectorAll("img");
        const effectData = (0, _product.product).effectCode;
        chosenGraphics.forEach((e)=>{
            e.src = `https://picsum.photos/id/${(0, _product.product).graphics}/50/50${effectData}`;
        });
        // set chosen print location
        const printLocationSpan = document.querySelector(".summary-setting-and-approval__print-location");
        printLocationSpan.innerHTML = (0, _product.product).printLocation;
        // set chosen graphics
        const graphicsSummaryImg = document.querySelector("#summary-product-graphics");
        graphicsSummaryImg.src = `https://picsum.photos/id/${(0, _product.product).graphics}/170/170${(0, _product.product).effectCode}`;
        // set chosen effect
        const effectSpan = document.querySelector(".summary-setting-and-approval__effect");
        effectSpan.innerHTML = (0, _product.product).effect + " " + (0, _product.product).blurPower;
        // set prices
        const printLocationPriceSpan = document.querySelector(".summary-setting-and-approval__print-location-price");
        const effectPriceSpan = document.querySelector(".summary-setting-and-approval__effect-price");
        const wholePriceSpan = document.querySelector(".summary-product-details__price");
        const printLocationPrice = (0, _product.product).printLocation === "Prz\xf3d i tył" ? 20 : 10;
        printLocationPriceSpan.innerHTML = `${printLocationPrice},00 PLN`;
        let effectPrice;
        if ((0, _product.product).effect === "Brak") effectPrice = 0;
        else if ((0, _product.product).effect === "Czarno-białe") effectPrice = 2;
        else if ((0, _product.product).effect === "Rozmycie") effectPrice = 3;
        effectPriceSpan.innerHTML = `${effectPrice},00 PLN`;
        const wholePrice = printLocationPrice + effectPrice;
        wholePriceSpan.innerHTML = `${wholePrice},00 PLN`;
    },
    validateProductSummaryCheckboxes: (item)=>{
        summaryProduct.isPrintLocationApproved = item.target.id === "summary-print-location" ? item.target.checked : summaryProduct.isPrintLocationApproved;
        summaryProduct.isGraphicsApproved = item.target.id === "summary-graphics" ? item.target.checked : summaryProduct.isGraphicsApproved;
        summaryProduct.isEffectApproved = item.target.id === "summary-effect" ? item.target.checked : summaryProduct.isEffectApproved;
    }
};

},{"./product":"5J9JY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fmThx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pagesModifiers", ()=>pagesModifiers);
var _finalOrderSummary = require("./finalOrderSummary");
var _product = require("./product");
var _summaryProduct = require("./summaryProduct");
const pageButtonNext = document.querySelector("#next-btn");
const pagesModifiers = {
    setBlurPowerSetting: (effect)=>{
        const blurPowerBlock = document.querySelector(".select-blur-power");
        const blurPower = document.querySelector(".select-blur-power__blur-power-number");
        if (effect === "Rozmycie") {
            blurPowerBlock.classList.add("select-blur-power--active");
            (0, _product.product).setBlurPower(blurPower.innerHTML);
        } else {
            (0, _product.product).blurPower = "";
            blurPowerBlock.classList.remove("select-blur-power--active");
        }
    },
    goToCheckoutButtonSwitch: ()=>{
        const redNotification = document.querySelector(".navigate-section__notification");
        const { isPrintLocationApproved , isGraphicsApproved , isEffectApproved  } = (0, _summaryProduct.summaryProduct);
        if (isPrintLocationApproved && isGraphicsApproved && isEffectApproved) {
            redNotification.classList.add("navigate-section__notification--disabled");
            pageButtonNext.disabled = false;
        } else {
            redNotification.classList.remove("navigate-section__notification--disabled");
            pageButtonNext.disabled = true;
        }
    },
    showCheckoutButton: ()=>{
        pageButtonNext.innerHTML = "Do kasy <span class='material-symbols-outlined navigate-buttons__arrow'>chevron_right</span>";
    },
    showNextButton: ()=>{
        pageButtonNext.innerHTML = "Dalej <span class='material-symbols-outlined navigate-buttons__arrow'>chevron_right</span>";
    },
    submitOrderButtonSwitch: (btn)=>{
        const { isPrintLocationApproved , isGraphicsApproved , isEffectApproved , isClientDataApproved , isDeliveryApproved  } = (0, _finalOrderSummary.finalOrderSummary);
        const redNotification = document.querySelector(".final-red-notification");
        if (isPrintLocationApproved && isGraphicsApproved && isEffectApproved && isClientDataApproved && isDeliveryApproved) {
            btn.disabled = false;
            redNotification.classList.add("final-red-notification--hidden");
        } else {
            redNotification.classList.remove("final-red-notification--hidden");
            btn.disabled = true;
        }
    },
    showGoToFinalCheckoutButton: ()=>{
        const nextButtonElement = document.querySelector("#next-btn");
        nextButtonElement.name = "go-to-final-checkout";
    },
    hideNavigateButtonAtFinalOrderSummary: (summaryPreview, pageButtonBack)=>{
        summaryPreview.classList.add("summary-preview--disable");
        pageButtonNext.classList.add("navigate-buttons__btn--disabled");
        pageButtonBack.classList.add("navigate-buttons__btn--disabled");
    }
};

},{"./finalOrderSummary":"5P07n","./product":"5J9JY","./summaryProduct":"7cEGc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5P07n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "finalOrderSummary", ()=>finalOrderSummary);
var _clientDataForm = require("./clientDataForm");
var _deliveryData = require("./deliveryData");
var _product = require("./product");
var _pagesModifiers = require("./pagesModifiers");
const finalOrderSummary = {
    finalizationOfOrder: false,
    isPrintLocationApproved: true,
    isGraphicsApproved: true,
    isEffectApproved: true,
    isClientDataApproved: false,
    isDeliveryApproved: false,
    finalPrice: "",
    showFinalOrderSummary: ()=>{
        // set t-shirt view at final summary
        const printPreview = document.querySelector(".print-location-preview");
        const copyOfPrintPreview = printPreview.cloneNode(true);
        copyOfPrintPreview.classList.add("shirt-preview-summary-product");
        const tshirtSummaryImg = document.querySelector(".t-shirt-final-summary-view");
        const previewToRemove = tshirtSummaryImg.querySelector(".shirt-preview-summary-product");
        if (previewToRemove !== null) tshirtSummaryImg.removeChild(previewToRemove);
        tshirtSummaryImg.appendChild(copyOfPrintPreview);
        // set particular graphics on t-shirt at final summary
        const chosenGraphics = tshirtSummaryImg.querySelectorAll("img");
        const effectData = (0, _product.product).effectCode;
        chosenGraphics.forEach((e)=>{
            e.src = `https://picsum.photos/id/${(0, _product.product).graphics}/50/50${effectData}`;
        });
        // set print location at final summary
        const printLocationFinalSummary = document.querySelector(".final-summary-setting-and-approval__print-location");
        printLocationFinalSummary.innerHTML = `${(0, _product.product).printLocation}`;
        // set chosen graphics at final summary
        const graphicsSummaryImg = document.querySelector("#final-summary-product-graphics");
        graphicsSummaryImg.src = `https://picsum.photos/id/${(0, _product.product).graphics}/170/170${(0, _product.product).effectCode}`;
        // set chosen effect at final summary
        const effectSpan = document.querySelector(".final-summary-setting-and-approval__effect");
        effectSpan.innerHTML = (0, _product.product).effect + " " + (0, _product.product).blurPower;
        // set prices
        const printLocationPriceSpan = document.querySelector(".final-summary-setting-and-approval__print-location-price");
        const effectPriceSpan = document.querySelector(".final-summary-setting-and-approval__effect-price");
        const printLocationPrice = (0, _product.product).printLocation === "Prz\xf3d i tył" ? 20 : 10;
        printLocationPriceSpan.innerHTML = `${printLocationPrice},00 PLN`;
        let effectPrice;
        if ((0, _product.product).effect === "Brak") effectPrice = 0;
        else if ((0, _product.product).effect === "Czarno-białe") effectPrice = 2;
        else if ((0, _product.product).effect === "Rozmycie") effectPrice = 3;
        effectPriceSpan.innerHTML = `${effectPrice},00 PLN`;
        // show client's data
        // name and surname
        const clientsNameSpan = document.querySelector(".final-summary-client-data-container__client-name");
        clientsNameSpan.innerHTML = `${(0, _clientDataForm.clientForm).data.name} ${(0, _clientDataForm.clientForm).data.surname}`;
        // street, building and flat number
        const clientsAddres1Span = document.querySelector(".final-summary-client-data-container__client-address1");
        const slash = (0, _clientDataForm.clientForm).data.flat === "" ? "" : "/";
        clientsAddres1Span.innerHTML = `${(0, _clientDataForm.clientForm).data.street} ${(0, _clientDataForm.clientForm).data.building}${slash}${(0, _clientDataForm.clientForm).data.flat}`;
        // postal code and city
        const clientsAddress2Span = document.querySelector(".final-summary-client-data-container__client-addres2");
        clientsAddress2Span.innerHTML = `${(0, _clientDataForm.clientForm).data.postalCode} ${(0, _clientDataForm.clientForm).data.city}`;
        // phone number
        const clientsContactPhoneSpan = document.querySelector(".final-summary-client-data-container__client-contact1");
        clientsContactPhoneSpan.innerHTML = `tel: ${(0, _clientDataForm.clientForm).data.phone}`;
        // email
        const clientsContactEmailSpan = document.querySelector(".final-summary-client-data-container__client-contact2");
        clientsContactEmailSpan.innerHTML = `email: ${(0, _clientDataForm.clientForm).data.email}`;
        // set delivery method at final summary
        const deliveryMethodSpan = document.querySelector(".final-summary-delivery__method-span");
        deliveryMethodSpan.innerHTML = `${(0, _deliveryData.delivery).method}`;
        // set delivery price at final summary
        const deliveryPriceSpan = document.querySelector(".final-summary-setting-and-approval__delivery-price");
        let deliveryPrice = (0, _deliveryData.delivery).method === "Wysyłka" ? 5 : 0;
        deliveryPriceSpan.innerHTML = `${deliveryPrice},00 PLN`;
        // hide address delivery if pick up method is chosen
        const deliveryAddressElement = document.querySelector(".final-summary-delivery-address");
        if ((0, _deliveryData.delivery).method === "Odbi\xf3r osobisty") deliveryAddressElement.classList.add("final-summary-delivery-address--hidden");
        else {
            deliveryAddressElement.classList.remove("final-summary-delivery-address--hidden");
            // show delivery address
            const deliveryAddress1Span = document.querySelector(".final-summary-delivery-address__address1");
            const deliveryAddress2Span = document.querySelector(".final-summary-delivery-address__address2");
            const slash = (0, _deliveryData.delivery).address.flat === "" ? "" : "/";
            deliveryAddress1Span.innerHTML = `${(0, _deliveryData.delivery).address.street} ${(0, _deliveryData.delivery).address.building}${slash}${(0, _deliveryData.delivery).address.flat}`;
            deliveryAddress2Span.innerHTML = `${(0, _deliveryData.delivery).address.postalCode} ${(0, _deliveryData.delivery).address.city}`;
        }
        // set final order price
        const finalPriceSpan = document.querySelector(".final-order-price__price");
        const price = printLocationPrice + effectPrice + deliveryPrice;
        finalPriceSpan.innerHTML = `${price},00 PLN`;
        finalOrderSummary.price = price;
        // change finalizationOfOrder to true when final summary is reached
        finalOrderSummary.finalizationOfOrder = true;
    },
    validateFinalSummaryApprovals: (item)=>{
        finalOrderSummary.isPrintLocationApproved = item.target.id === "final-summary-print-location" ? item.target.checked : finalOrderSummary.isPrintLocationApproved;
        finalOrderSummary.isGraphicsApproved = item.target.id === "final-summary-graphics" ? item.target.checked : finalOrderSummary.isGraphicsApproved;
        finalOrderSummary.isEffectApproved = item.target.id === "final-summary-effect" ? item.target.checked : finalOrderSummary.isEffectApproved;
        finalOrderSummary.isClientDataApproved = item.target.id === "final-summary-client-data" ? item.target.checked : finalOrderSummary.isClientDataApproved;
        finalOrderSummary.isDeliveryApproved = item.target.id === "final-summary-delivery-method" ? item.target.checked : finalOrderSummary.isDeliveryApproved;
        const orderSubmitButton = document.querySelector(".submit-order-btn");
        (0, _pagesModifiers.pagesModifiers).submitOrderButtonSwitch(orderSubmitButton);
    }
};

},{"./clientDataForm":"8t8UO","./deliveryData":"bsMhY","./product":"5J9JY","./pagesModifiers":"fmThx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8t8UO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clientForm", ()=>clientForm);
var _regex = require("./regex");
var _validateDeliveryAddressInputs = require("./validateDeliveryAddressInputs");
const clientForm = {
    data: {
        name: "",
        surname: "",
        street: "",
        building: "",
        flat: "",
        postalCode: "",
        city: "",
        phone: "",
        email: ""
    },
    isFormValid: false,
    handleFormInputs: (item)=>{
        clientForm.data[item.target.name] = item.target.value;
        const { id , value  } = item.target;
        const { turnGreen , turnRed  } = clientForm;
        const { regexOneLetter , regexOnlyNumbersAndMinus , regexOneDot , regexOneAt  } = (0, _regex.regex);
        // check name and surname
        // at least one letter
        if (id === "client-name" || id === "client-surname") {
            if (regexOneLetter.test(value)) turnGreen(item.target);
            else turnRed(item.target);
        } else if (id === "client-phone") {
            if (regexOnlyNumbersAndMinus.test(value) && value.length > 8) turnGreen(item.target);
            else turnRed(item.target);
        } else if (id === "client-email") {
            if (regexOneAt.test(value) && regexOneDot.test(value)) turnGreen(item.target);
            else turnRed(item.target);
        } else (0, _validateDeliveryAddressInputs.validateAddressInputs)(item, "client address");
    },
    turnGreen: (item)=>{
        item.classList.remove("client-data-list__input--red");
        item.classList.add("client-data-list__input--green");
    },
    turnRed: (item)=>{
        item.classList.remove("client-data-list__input--green");
        item.classList.add("client-data-list__input--red");
    },
    removeColor: (item)=>{
        item.classList.remove("client-data-list__input--green");
        item.classList.remove("client-data-list__input--red");
    }
};

},{"./regex":"l9bLp","./validateDeliveryAddressInputs":"91FU1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l9bLp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "regex", ()=>regex);
const regex = {
    regexOneLetter: /[a-zA-Z]/,
    regexOneNumber: /\d+/,
    regexOnlyNumbersAndMinus: /^[0-9\-]+$/,
    regexOneDot: /.*\..*/,
    regexOneAt: /@/
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"91FU1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validateAddressInputs", ()=>validateAddressInputs);
var _regex = require("./regex");
var _clientDataForm = require("./clientDataForm");
var _deliveryData = require("./deliveryData");
const validateAddressInputs = (item, whichForm)=>{
    if (whichForm === "delivery address") (0, _deliveryData.delivery).address[item.target.name] = item.target.value;
    const { id , value  } = item.target;
    const { turnGreen , turnRed , removeColor  } = (0, _clientDataForm.clientForm);
    const { regexOneLetter , regexOneNumber  } = (0, _regex.regex);
    // check street and city
    // at least one letter
    if (id === "client-street" || id === "client-city" || id === "delivery-street" || id === "delivery-city") {
        if (regexOneLetter.test(value)) turnGreen(item.target);
        else turnRed(item.target);
    } else if (id === "client-building" || id === "delivery-building") {
        if (regexOneNumber.test(value)) turnGreen(item.target);
        else turnRed(item.target);
    } else if (id === "client-flat" || id === "delivery-flat") {
        if (regexOneNumber.test(value)) turnGreen(item.target);
        else if (value === "") removeColor(item.target);
        else turnRed(item.target);
    // check postal code
    // can't be empty
    } else if (id === "client-postalCode" || id === "delivery-postalCode") {
        if (value !== "" && value.length > 4 && regexOneNumber.test(value)) turnGreen(item.target);
        else turnRed(item.target);
    }
};

},{"./regex":"l9bLp","./clientDataForm":"8t8UO","./deliveryData":"bsMhY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bsMhY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "delivery", ()=>delivery);
var _clientDataForm = require("./clientDataForm");
var _regex = require("./regex");
const theSameAddressButton = document.querySelector(".checkboxes-list__item--smaller");
const delivery = {
    method: "Odbi\xf3r osobisty",
    address: {
        street: "",
        building: "",
        flat: "",
        postalCode: "",
        city: ""
    },
    isDeliveryAddressValid: true,
    switchAddressFormIfDelivery: (option)=>{
        const deliveryForm = document.querySelector(".delivery-form");
        const notificationSpan = document.querySelector(".delivery-page__notification");
        if (option === "delivery") {
            deliveryForm.classList.add("delivery-form--visible");
            theSameAddressButton.classList.remove("checkboxes-list__item--hidden");
            notificationSpan.classList.remove("delivery-page__notification--hidden");
            delivery.isDeliveryAddressValid = false;
        } else if (option === "pickup") {
            deliveryForm.classList.remove("delivery-form--visible");
            theSameAddressButton.classList.add("checkboxes-list__item--hidden");
            notificationSpan.classList.add("delivery-page__notification--hidden");
            delivery.isDeliveryAddressValid = true;
        }
    },
    validateAddressForm: ()=>{
        // red highlight to all empty inputs after submit
        for(const key in delivery.address){
            const value = delivery.address[key];
            if (value === "" && key !== "flat") switch(value){
                case "":
                    (0, _clientDataForm.clientForm).turnRed(document.querySelector(`#delivery-${key}`));
                    break;
            }
        }
        const { street , building , flat , postalCode , city  } = delivery.address;
        // set isFormValid, break loop and leave whole function if some input is empty
        for(const key in delivery.address){
            const value = delivery.address[key];
            if (value !== "" || key === "flat") delivery.isDeliveryAddressValid = true;
            else {
                delivery.isDeliveryAddressValid = false;
                return;
            }
        }
        const { regexOneLetter , regexOneNumber  } = (0, _regex.regex);
        if (regexOneLetter.test(street) && regexOneLetter.test(city) && regexOneNumber.test(building) && (regexOneNumber.test(flat) || flat === "") && regexOneNumber.test(postalCode) && postalCode.length > 4) delivery.isDeliveryAddressValid = true;
        else {
            delivery.isDeliveryAddressValid = false;
            return;
        }
    },
    setTheSameAddress: ()=>{
        const deliveryAddressInputs = {
            street: document.querySelector("#delivery-street"),
            building: document.querySelector("#delivery-building"),
            flat: document.querySelector("#delivery-flat"),
            postalCode: document.querySelector("#delivery-postalCode"),
            city: document.querySelector("#delivery-city")
        };
        deliveryAddressInputs.street.value = `${(0, _clientDataForm.clientForm).data.street}`;
        deliveryAddressInputs.building.value = `${(0, _clientDataForm.clientForm).data.building}`;
        deliveryAddressInputs.flat.value = `${(0, _clientDataForm.clientForm).data.flat}`;
        deliveryAddressInputs.postalCode.value = `${(0, _clientDataForm.clientForm).data.postalCode}`;
        deliveryAddressInputs.city.value = `${(0, _clientDataForm.clientForm).data.city}`;
        for(const key in delivery.address)delivery.address[key] = (0, _clientDataForm.clientForm).data[key];
        delivery.validateAddressForm();
        for(const key in deliveryAddressInputs){
            deliveryAddressInputs[key].classList.remove("client-data-list__input--red");
            deliveryAddressInputs[key].classList.add("client-data-list__input--green");
        }
    }
};

},{"./clientDataForm":"8t8UO","./regex":"l9bLp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9U4xO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "validateForm", ()=>validateForm);
var _clientDataForm = require("./clientDataForm");
var _regex = require("./regex");
const validateForm = ()=>{
    const { name , surname , street , building , flat , postalCode , city , phone , email  } = (0, _clientDataForm.clientForm).data;
    // red highlight to all empty inputs after submit
    for(const key in (0, _clientDataForm.clientForm).data){
        const value = (0, _clientDataForm.clientForm).data[key];
        if (value === "" && key !== "flat") switch(value){
            case "":
                (0, _clientDataForm.clientForm).turnRed(document.querySelector(`#client-${key}`));
                break;
        }
    }
    // set isFormValid, break loop and leave whole function if some input is empty
    for(const key in (0, _clientDataForm.clientForm).data){
        const value = (0, _clientDataForm.clientForm).data[key];
        if (value !== "" || key === "flat") (0, _clientDataForm.clientForm).isFormValid = true;
        else {
            (0, _clientDataForm.clientForm).isFormValid = false;
            return;
        }
    }
    const { regexOneLetter , regexOneNumber , regexOnlyNumbersAndMinus , regexOneDot , regexOneAt  } = (0, _regex.regex);
    if (regexOneLetter.test(name) && regexOneLetter.test(surname) && regexOneLetter.test(street) && regexOneLetter.test(city) && regexOneNumber.test(building) && (regexOneNumber.test(flat) || flat === "") && regexOneNumber.test(postalCode) && postalCode.length > 4 && regexOnlyNumbersAndMinus.test(phone) && phone.length > 8 && regexOneAt.test(email) && regexOneDot.test(email)) (0, _clientDataForm.clientForm).isFormValid = true;
    else {
        (0, _clientDataForm.clientForm).isFormValid = false;
        return;
    }
};

},{"./clientDataForm":"8t8UO","./regex":"l9bLp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c1Wl4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createNewOrder", ()=>createNewOrder);
const createNewOrder = ({ product , clientForm , delivery , finalOrderSummary  })=>{
    const order = {
        client: {
            name: clientForm.data.name,
            surname: clientForm.data.surname,
            address: {
                street: clientForm.data.street,
                building: clientForm.data.building,
                flat: clientForm.data.flat,
                postalCode: clientForm.data.postalCode
            },
            contact: {
                phone: clientForm.data.phone,
                email: clientForm.data.email
            }
        },
        product: {
            type: product.type,
            printLocation: product.printLocation,
            effect: product.effect,
            graphics: product.graphics,
            blurPower: product.blurPower
        },
        delivery: {
            method: delivery.method,
            deliveryAddress: delivery.address
        },
        price: finalOrderSummary.price
    };
    return order;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dIhK3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadOrderInfoToThankYouPage", ()=>loadOrderInfoToThankYouPage);
const loadOrderInfoToThankYouPage = (order)=>{
    // delete header container
    const headerContainerElement = document.querySelector(".header-container");
    headerContainerElement.classList.add("header-container--hidden");
    const thankYouHeader = document.querySelector(".thank-you-header");
    const orderInfoPrintLocationSpan = document.querySelector(".order-info__print-location");
    const orderInfoEffectSpan = document.querySelector(".order-info__effect");
    const orderInfoGraphicsImg = document.querySelector(".order-info__graphics");
    const orderInfoDeliveryMethodSpan = document.querySelector(".order-info__delivery-method");
    const orderInfoPriceSpan = document.querySelector(".order-info__price");
    const graphics = document.querySelector("#effect-preview");
    const copyGraphics = graphics.cloneNode(true);
    thankYouHeader.innerHTML = `Dziękujemy ${order.client.name}!`;
    orderInfoPrintLocationSpan.innerHTML = `${order.product.printLocation}`;
    orderInfoEffectSpan.innerHTML = `${order.product.effect} ${order.product.blurPower}`;
    orderInfoGraphicsImg.appendChild(copyGraphics);
    orderInfoDeliveryMethodSpan.innerHTML = `${order.delivery.method}`;
    orderInfoPriceSpan.innerHTML = `${order.price},00 PLN`;
    if (order.delivery.method !== "Odbi\xf3r osobisty") {
        const orderInfoDeliveryAddress1 = document.querySelector(".order-info__delivery-addres1");
        const orderInfoDeliveryAddress2 = document.querySelector(".order-info__delivery-addres2");
        const slash = order.delivery.deliveryAddress.flat === "" ? "" : "/";
        orderInfoDeliveryAddress1.innerHTML = `${order.delivery.deliveryAddress.street} ${order.delivery.deliveryAddress.building}${slash}${order.delivery.deliveryAddress.flat}`;
        orderInfoDeliveryAddress2.innerHTML = `${order.delivery.deliveryAddress.postalCode} ${order.delivery.deliveryAddress.city}`;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["6fRhY","8lRBv"], "8lRBv", "parcelRequire7053")

//# sourceMappingURL=index.59a40e7a.js.map
