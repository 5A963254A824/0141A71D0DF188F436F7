//-------------------------------------------------------------------
// Skip Party Command.js
//-------------------------------------------------------------------
/*:
* @plugindesc Skips the Party Command entirely.
* @author Soulpour777
*
* @param EscapeString
* @desc The escape name from the command.
* @default Escape
*
* @help
//-------------------------------------------------------------------
// Skip Party Command.js
// Author: Soulpour777
// Version Number: 1
// Website: https://soulxregalia.wordpress.com/
//-------------------------------------------------------------------
*/
(function(){
    var params = PluginManager.parameters('Skip Party Command');
    var escapeString = String(params['EscapeString'] || "Escape");
    Scene_Battle.prototype.startPartyCommandSelection = function() {
        this.refreshStatus();
        this._statusWindow.deselect();
        this._statusWindow.open();
        if(BattleManager.startInput) {
            this.selectNextCommand();
        } else {
            this._partyCommandWindow.deactivate();
        }
        this.startActorCommandSelection();
    };