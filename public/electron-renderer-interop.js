const { ipcRenderer: ipc, remote } = require('electron');
const { Menu, app, shell } = remote;

window.electronBridge = {
    init: () => {
        ipc.on('message', (event, arg) => {
            console.log(event, arg)
        })
    },
    setMenu: (menuTemplate) => {
        const template = [
            ...(process.platform == 'darwin' ? [{
                label: app.getName(),
                submenu: [
                    { role: 'about' },
                    { type: 'separator' },
                    { role: 'services' },
                    { type: 'separator' },
                    { role: 'hide' },
                    { role: 'hideothers' },
                    { role: 'unhide' },
                    { type: 'separator' },
                    { role: 'quit' }
                ]
            }] : []),
            ...menuTemplate,
            {
                role: 'help',
                submenu: [
                    {
                    label: 'Learn More',
                        click: async () => {
                            await shell.openExternal('https://paygatepos.com')
                        }
                    }
                ]
            }
        ]

        const menu = Menu.buildFromTemplate(template)
        Menu.setApplicationMenu(menu)
    }
}
