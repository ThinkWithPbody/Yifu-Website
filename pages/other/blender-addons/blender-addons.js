const addonList = `| [X] | Refine tracking solution                                                                           | Built In |                                                                                                                                                         |
| [X] | [SheepIt](https://www.sheepit-renderfarm.com/home)                                                 | External | D:\\_twp\\Software\\Blender\\sheepit-autoupdate.exe -request-time "24:00-06:00,11:00-16:00"                                                                 |
| [ ] | [Sketchfab](https://github.com/sketchfab/blender-plugin)                                           | External | D:\\_twp\\Software\\Blender\\Addon\\Sketchfab\\                                                                                                               |
| [X] | [Powersave](https://blendermarket.com/pickup/ds5ax7)                                               | External | D:\\_twp\\Software\\Blender\\Assets\\project\\ - %Y-%m-%dT%H_%M_%S%z - Traffic                                                                                |`;
const rows = addonList.trim().split(`\n`);
let html = ``;

rows.forEach(row => {
    // Split the row into an array of cells
    const cells = row.split(`|`).map(cell => { return cell.trim(); });
    // Get the checkbox state from the first cell
    const checkboxState = cells[1].startsWith('[X]');
    // Get the link and addon name from the second cell
    const names = cells[2].match(/\[(.*?)\]/);
    const links = cells[2].match(/\((.*?)\)/);
    let addon;
    if (links) {
        addon = `<a href="${links[1]}">${names[1]}</a>`;
    } else {
        addon = cells[2];
    };
    // Get the command from the fourth cell
    const comment = cells[4];
    // Format the row as an HTML table row
    html += `
    <tr>
    <td><input type="checkbox"${checkboxState ? ' checked' : ''}></td>
    <td>${addon}</td>
    <td>${comment}</td>
    </tr>`;
})
console.log(html);