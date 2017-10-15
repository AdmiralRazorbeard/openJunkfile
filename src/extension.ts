'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.sayHello', () => {
        // The code you place here will be executed every time your command is executed
        // vscode.window.showTextDocument(uri).then((editor)=>{ editor.show()});
        vscode.window.showInputBox({placeHolder:'input file name'}).then((filename) => {
            if(filename === undefined) { return false; }

            const uri = vscode.Uri.parse('untitled:/tmp/'+filename);
            vscode.workspace.openTextDocument(uri).then((text)=> { 
                vscode.window.showTextDocument(text,vscode.ViewColumn.One);
            })
        })
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}