/**
 * @name Discord Experiments
 * @author Azagaria
 * @version 1.0
 * @description Shows experiments tab
 * @updateUrl https://raw.githubusercontent.com/An00nymushun/DiscordFreeEmojis/master/DiscordExperiments.plugin.js
 */

/*@cc_on
@if (@_jscript)

let wpRequire;
window.webpackChunkdiscord_app.push([[ Math.random() ], {}, (req) => { wpRequire = req; }]);
mod = Object.values(wpRequire.c).find(x => typeof x?.exports?.default?.isDeveloper !== "undefined")
usermod = Object.values(wpRequire.c).find(x => x?.exports?.default?.getUsers)
nodes = Object.values(mod.exports.default._dispatcher._dependencyGraph.nodes)
try {
    nodes.find(x => x.name == "ExperimentStore").actionHandler["CONNECTION_OPEN"]({user: {flags: 1}, type: "CONNECTION_OPEN"})
} catch (e) {}
oldGetUser = usermod.exports.default.__proto__.getCurrentUser;
usermod.exports.default.__proto__.getCurrentUser = () => ({hasFlag: () => true})
nodes.find(x => x.name == "DeveloperExperimentStore").actionHandler["CONNECTION_OPEN"]()
usermod.exports.default.__proto__.getCurrentUser = oldGetUser

module.exports = Experiments;

/*@end @*/
