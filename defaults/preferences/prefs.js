/* Copyright 2017 Mozilla
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License. */

// App-specific preferences, in alphabetical order.

pref('browser.dom.window.dump.enabled', true);
pref('devtools.chrome.enabled', true);
pref('devtools.debugger.prompt-connection', false);
pref('devtools.debugger.remote-enabled', true);
pref('devtools.theme', 'dark');
pref('dom.mozBrowserFramesEnabled', true);
pref('javascript.options.showInConsole', true);

// Ideally, this would disable telemetry, but it doesn't actually work
// (at least it doesn't disable code that spews errors into the console),
// so we also override the @mozilla.org/base/telemetry-startup;1 XPCOM contract
// with a custom component DisabledTelemetryStartup that ignores
// the app-startup and profile-after-change messages.
pref('toolkit.telemetry.enabled', false);
// Blocklist preferences
pref("extensions.blocklist.enabled", false);
// Controls what level the blocklist switches from warning about items to forcibly
// blocking them.
pref("extensions.blocklist.url", "");
pref("extensions.blocklist.detailsURL", "");
pref("extensions.blocklist.itemURL", "");
pref("network.proxy.http", "localhost");
pref("network.proxy.http_port", 3000);
pref("network.proxy.no_proxies_on", "*.server.local");
pref("network.proxy.type", 1);
pref("network.proxy.share_proxy_settings", true);
pref("network.automatic-ntlm-auth.trusted-uris","player.phereo.com, ubm.optonet.es, content.phereo.com");
pref("browser.cache.disk.enable", true);
pref("browser.cache.disk.smart_size.enabled", true); 
pref("browser.cache.disk.capacity", 1000000);
pref("nglayout.debug.disable_xul_cache", false);
pref("nglayout.debug.disable_xul_fastload", false);
pref("plugin.load_flash_only", false);
