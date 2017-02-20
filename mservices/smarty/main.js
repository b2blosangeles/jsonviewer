$($('.'+mapping_data.id)[0]).html(_TPL_['tpl/smarty/home.html']);
    var data = {
        greeting: 'Hi, there are some JScript books you may find interesting:',
        books : [
            {
                title  : 'JavaScript: The Definitive Guide',
                author : 'David Flanagan',
                price  : '31.18'
            },
            {
                title  : 'Murach JavaScript and DOM Scripting',
                author : 'Ray Harris',
            },
            {
                title  : 'Head First JavaScript',
                author : 'Michael Morrison',
                price  : '29.54'
            }
        ]
    };