// ╒══════════════════════════════════════════════════════════════════════════════════╕
// █▐▐  Window Options
// ╞══════════════════════════════════════════════════════════════════════════════════╡
/*:
 *  @plugindesc [1.03] Enable or disable various windows.
 *  @author Exhydra
 *
 *  @param ─ Battle
 *  @desc 
 *  @default ───────────────
 *
 *  @param Disable Party Command
 *  @desc Disable the party command window in a battle.
 *  @default false
 * 
 *  @param ─ Plugin
 *  @desc
 *  @default ───────────────
 *  @param Plugin GID
 *  @desc Global identification tag for internal use only. Do not change.
 *  @default eXa-zfFroWMnUdXxOeb
 *
 *  @help
 * ▄ Plugin                  ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄ ▄ ▄
 *
 *   ┌─ Version : 1.03
 *   ├─ Release : 14th August 2016
 *   ├─ Updated : 14th  August 2016
 *   └─ License : Free for Commercial and Non-Commercial Usage
 *
 */
// ╘══════════════════════════════════════════════════════════════════════════════════╛
 
// ╒══════════════════════════════════════════════════════════════════════════════════╕
// ■ [Object] Plugin
// ╘══════════════════════════════════════════════════════════════════════════════════╛

var Imported = Imported || {};
Imported.exaWindowOptions = 1.03;

var EXA = EXA     || {};
EXA.WO  = EXA.WO  || {};

(function() {
	
	'use strict';
  
	var exaParams = $plugins.filter(function(plugin) {
		return plugin.parameters['Plugin GID'] == 'eXa-zfFroWMnUdXxOeb';
	})[0].parameters;
  
  EXA.WO._disablePartyCommand = exaParams['Disable Party Command'] === 'true' || false;
  
})();

// ╒══════════════════════════════════════════════════════════════════════════════════╕
// ■ [Object] Scene_Battle
// ╘══════════════════════════════════════════════════════════════════════════════════╛

// ALIAS ─────────────────────────────────────────────────────────────────────────────┐
// □ [Function] startPartyCommandSelection
// └──────────────────────────────────────────────────────────────────────────────────┘

EXA.WO.Scene_Battle_startPartyCommandSelection = Scene_Battle.prototype.startPartyCommandSelection;

Scene_Battle.prototype.startPartyCommandSelection = function() {
  
  if (EXA.WO._disablePartyCommand) {
    if (BattleManager._actorIndex == -1) {
      BattleManager._actorIndex++;
      BattleManager.changeActor(BattleManager._actorIndex, 'waiting');
    }
    this.startActorCommandSelection();
  } else {
    EXA.WO.Scene_Battle_startPartyCommandSelection.call(this);
  }

}; // Scene_Battle ‹‹ startPartyCommandSelection

// ▌▌██████████████████████████████████████ EOF █████████████████████████████████████▐▐