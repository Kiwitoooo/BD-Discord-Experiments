 /**
 * @name Discord Experiments
 * @version 1.0
 * @description Enables Discord Experiments
 * @author Kiwito
 * @updateUrl https://raw.githubusercontent.com/Kiwitoooo/BD-Discord-Experiments/main/DiscordExperiments.plugin.js
 */



   module.exports = class Experiments{
     
       load() { }
       start() {

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


}
stop(){
  
}
}
