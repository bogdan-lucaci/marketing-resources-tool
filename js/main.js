'use strict';

const s2p_marketing = (function () {
    
    let DATA = {
        
    }

    const UI = (function () {
        
        let _component = {
            section: (function () {
                let _consts = {
                    vectorialFormats: ['EPS', 'SVG', 'AI'],
                    notImgFormat: ['PDF','DOCX','DOC'],
                    s2pLogosFolder: 's2p-logo/',
                    printsFolder: 'prints/',
                    gpLogosFolder: 'methods/',
                };

                let _dataAccess = {
                    getSectionData: function (sectionName) {
                        return _DATA.filter(function (section) {
                            return section[0] === sectionName;
                        })[0][1];
                    }
                };

                let _template = {
                    filters: {

                    },
                    SECTION_logo: {
                        cardTemplate: function (imgObj) {
                            let imgPath = 'img/' + _consts.s2pLogosFolder + imgObj.file;
                            let card = [
                                '<div class="s2p-logo-card card">',
                                    '<div class="card-img-top">',
                                        '<img  src="' + imgPath + '"/>',
                                    '</div>',
                                    '<div class="card-body  text-center">',
                                        '<h5 class="card-title">' + imgObj.file + '</h5>',
                                        '<p class="card-text">',
                                            imgObj.width !== -1 ? '<span class="badge badge-pill badge-light">Width: ' + imgObj.width + '</span> ' : '',
                                            imgObj.height !== -1 ? '<span class="badge badge-pill badge-light">Height: ' + imgObj.height + '</span> ' : '',
                                            imgObj.dpi !== -1 ? '<span class="badge badge-pill badge-light">DPI: ' + imgObj.dpi + '</span> ' : '',
                                            '<span class="badge badge-pill badge-secondary">Format: ' + imgObj.file.split('.').pop().toUpperCase() + '</span>',
                                        '</p>',
                                        '<a href="' + imgPath + '" class="btn btn-info" download>',
                                            'Download ',
                                            '<img class="svg-icon" src="img/icons/arrow-down-circle-fill-white.svg"/>',
                                        '</a>',
                                    '</div>',
                                '</div>'
                            ].join('');
            
                            return card;
                        },
                        listTemplate: function (sectionData) {
                            function listHeaderTemplate(sectionFilters) {
                                function sortByCol (colName) {

                                }

                                function getCurrentItemColSize(item) {
                                    let colSize = '3 col-md-1  text-left text-md-center';
                                    if (item === 'file') {
                                        colSize = '12 col-md-5  text-left';
                                    } else if( item === 'format') {
                                        colSize = '3 col-md-1  text-left text-md-center';
                                    }
                                    return colSize;
                                }
                                
                                return [
                                    '<div class="s2p-logo-listHeader row no-gutters_  mb-2">',
                                        '<div class="headerThumb col-4 col-md-2  d-none d-md-block"></div>',
                                        sectionFilters.map(function(item) {
                                            return [
                                                '<div class="header' + item.charAt(0).toUpperCase() + item.slice(1) + ' col-' + getCurrentItemColSize(item) + '">',
                                                    '<span onclick="UI.">' + item + '</span>',
                                                '</div>'
                                            ].join('');
                                        }).join(''),
                                    '</div>'
                                ].join('');
                            };
            
                            function listRowTemplate (imgObj) {
                                let imgPath = 'img/' + _consts.s2pLogosFolder + imgObj.file;
                                return [
                                    '<div class="s2p-logo-listRow row no-gutters_  py-1">',
                                        '<div class="itemThumb col-4 col-md-2">' + (imgObj.file.split('.').pop().toUpperCase() === 'EPS' ? 'N/A' : ('<img src="' + imgPath + '">')) + '</div>',
                                        '<div class="itemFile col-8 col-md-5">' + imgObj.file.substr(0, imgObj.file.length-4) + '</div>',
                                        '<div class="itemWidth col-1  mr-3 mr-md-0">' + (imgObj.width === -1 ? '∞' : imgObj.width) + '</div>',
                                        '<div class="itemHeight col-1  mr-3 mr-md-0">' + (imgObj.height === -1 ? '∞' : imgObj.height) + '</div>',
                                        '<div class="itemDpi col-1  mr-3 mr-md-0">' + (imgObj.dpi === -1 ? '∞' : imgObj.dpi) + '</div>',
                                        '<div class="itemFormat col-1  mr-3 mr-md-0">' + imgObj.file.split('.').pop().toUpperCase() + '</div>',
                                        '<div class="itemFormat col-1">',
                                            '<a href="' + imgPath + '" class="" title="Download" download>',
                                                '<img class="svg-icon" src="img/icons/arrow-down-circle-fill-info.svg"/>',
                                            '</a>',
                                        '</div>',
                                    '</div>'
                                ].join('');
                            };
            
                            // create list markup
                            return [
                                '<div class="s2p-logo-list">',
                                    sectionData.filters.length ? listHeaderTemplate(sectionData.filters) : '',
                                    sectionData.images.map(function(imgObj) { 
                                        return listRowTemplate(imgObj); 
                                    }).join(''),
                                '</div>'
                            ].join('');
                        }
                    },
                    SECTION_prints: {
                        cardTemplate: function (imgObj) {
                            let imgPath = 'img/' + _consts.printsFolder + imgObj.file;
                            let imgFormat = imgObj.file.split('.').pop().toUpperCase();
                            let card = [
                                '<div class="s2p-logo-card print card">',
                                    '<div class="card-img-top my-3">',
                                        _consts.notImgFormat.indexOf(imgFormat) === -1 ? '<img  src="' + imgPath + '"/>' : '<h1>' + imgFormat + '</h1>',
                                    '</div>',
                                    '<div class="card-body  text-center  pt-0">',
                                        '<h5 class="card-title">' + imgObj.name + '</h5>',
                                        '<p class="card-text">',
                                            '<span class="badge badge-pill badge-light d-block">' + imgObj.file + '</span>',
                                            //'<span class="badge badge-pill badge-light">ID: ' + imgObj.id + '</span>',
                                            '<span class="badge badge-pill badge-secondary">Format: <b>' + imgFormat + '</b></span>',
                                        '</p>',
                                        '<a href="' + imgPath + '" class="btn btn-info" download>',
                                            'Download ',
                                            '<img class="svg-icon" src="img/icons/arrow-down-circle-fill-white.svg"/>',
                                        '</a>',
                                    '</div>',
                                '</div>'
                            ].join('');
            
                            return card;
                        },                        
                    },
                    SECTION_gp: {
                        cardTemplate: function (imgObj) {
                            let imgPath = 'img/' + _consts.gpLogosFolder + imgObj.file;
                            let imgFormat = imgObj.file.split('.').pop().toUpperCase();
                            let card = [
                                '<div class="s2p-logo-card card  ' + (imgObj.active === '0' ? 'border-danger' : '') + '">',
                                    '<div class="card-img-top">',
                                        '<img  src="' + imgPath + '"/>',
                                    '</div>',
                                    '<div class="card-body  text-center  pt-0">',
                                        '<h5 class="card-title">' + imgObj.name + '<br>' + '<span class="badge badge-pill badge-light">ID: ' + imgObj.id + '</span>' + '</h5>',
                                        '<p class="card-text">',
                                            '<span class="badge badge-pill badge-light d-block">' + imgObj.file + '</span>',
                                            //'<span class="badge badge-pill badge-light">ID: ' + imgObj.id + '</span>',
                                            '<span class="badge badge-pill badge-' + (imgObj.active === '1' ? 'light' : 'danger') + '">Active: ' + (imgObj.active === '1' ? 'YES' : 'NO') + '</span>',
                                            '<span class="badge badge-pill badge-secondary">Format: <b>' + imgFormat + '</b></span>',
                                        '</p>',
                                        '<a href="' + imgPath + '" class="btn btn-info" download>',
                                            'Download ',
                                            '<img class="svg-icon" src="img/icons/arrow-down-circle-fill-white.svg"/>',
                                        '</a>',
                                    '</div>',
                                '</div>'
                            ].join('');
            
                            return card;
                        },
                        listTemplate: function (sectionData) {
                            function listHeaderTemplate(sectionFilters) {
                                function sortByCol (colName) {

                                }

                                function getCurrentItemColSize(item) {
                                    let colSize = '3 col-md-1  text-left text-md-center';
                                    if (item === 'name') {
                                        colSize = '12 col-md-5';
                                    } else if( item === 'format') {
                                        colSize = '3 col-md-1  text-left text-md-center';
                                    } else if (item === 'file') {
                                        colSize = '3 d-none'
                                    }

                                    return colSize;
                                }
                                
                                return [
                                    '<div class="s2p-logo-listHeader row no-gutters_  mb-2">',
                                        '<div class="headerThumb col-4 col-md-2  d-none d-md-block"></div>',
                                        sectionFilters.map(function(item) {
                                            return '<div class="header' + item.charAt(0).toUpperCase() + item.slice(1) + ' col-' + getCurrentItemColSize(item) + '">' + item + '</div>';
                                        }).join(''),
                                    '</div>'
                                ].join('');
                            };
            
                            function listRowTemplate (imgObj) {
                                let imgPath = 'img/' + _consts.gpLogosFolder + imgObj.file;
                                return [
                                    '<div class="s2p-logo-listRow row no-gutters_  py-1">',
                                        '<div class="itemThumb col-4 col-md-2">' + (imgObj.file.split('.').pop().toUpperCase() === 'EPS' ? 'N/A' : ('<img src="' + imgPath + '">')) + '</div>',
                                        '<div class="itemId col-1  mr-3 mr-md-0">' + imgObj.id + '</div>',
                                        '<div class="itemName col-2 col-md-4">' + imgObj.name + '</div>',
                                        //'<div class="itemFile col-2  mr-3 mr-md-0">' + imgObj.file.substr(0, imgObj.file.length-4) + '</div>',
                                        //'<div class="itemWidth col-1  mr-3 mr-md-0">' + (imgObj.width === -1 ? '∞' : imgObj.width) + '</div>',
                                        //'<div class="itemHeight col-1  mr-3 mr-md-0">' + (imgObj.height === -1 ? '∞' : imgObj.height) + '</div>',
                                        '<div class="itemFormat col-1  mr-3 mr-md-0">' + imgObj.file.split('.').pop().toUpperCase() + '</div>',
                                        '<div class="itemActive col-1  mr-3 mr-md-0">' + (imgObj.active === '1' ? 'YES' : 'NO') + '</div>',
                                        '<div class="itemFormat col-1">',
                                            '<a href="' + imgPath + '" class="" title="Download" download>',
                                                '<img class="svg-icon" src="img/icons/arrow-down-circle-fill-info.svg"/>',
                                            '</a>',
                                        '</div>',
                                    '</div>'
                                ].join('');
                            };
            
                            // create list markup
                            return [
                                '<div class="s2p-logo-list">',
                                    sectionData.filters.length ? listHeaderTemplate(sectionData.filters) : '',
                                    sectionData.images.map(function(imgObj) { 
                                        return listRowTemplate(imgObj); 
                                    }).join(''),
                                '</div>'
                            ].join('');
                        }
                    }
                };

                let _events = {
                    onListHeaderClick: function () {
                        //_action.orderByFilter 
                    },
                    start: function () {
                        _events.onListHeaderClick();
                    }
                };

                let _action = {
                    // order content by a given filter
                    orderByFilter: function(filter) {

                    },
                    // gets section content markup for a specific tab name
                    getSectionContent: function (tabName, settings) {
                        let sectionData = _dataAccess.getSectionData(tabName);
                        let sectionName = tabName.toLowerCase().replace(/\s+/g, '');
                        let content = '<div class="alert alert-info  text-center  py-4 mx-auto w-50percent" role="alert">No content found!</div>'
                        //let content = '<h4 class="badge-pill badge-warning text-center py-4 mx-auto w-50percent">No content found!</h4>'

                        if (sectionName === 'logo') {
                            if (sectionData.images.length) {
                                let layout = 'list'; // 'list' / 'cards'
                                if (settings) {
                                    if (settings.listLayout) {
                                        layout = settings.listLayout;
                                    }
                                }
                                switch (layout) {
                                    case 'cards':
                                        content = sectionData.images.reduce((accumulator, currentValue, currentIndex, array) => {
                                            return accumulator + _template.SECTION_logo.cardTemplate(currentValue);
                                        }, '');
                                        break;
                                    default:
                                        content = _template.SECTION_logo.listTemplate(sectionData);
                                        break;
                                }
                            }
                        }
                        else if (sectionName === 'prints') {
                            if (sectionData.images.length) {
                                let layout = settings ? settings.listLayout || 'list' : 'list'; // 'list' / 'cards'

                                switch (layout) {
                                    case 'cards':
                                        content = sectionData.images.reduce((accumulator, currentValue, currentIndex, array) => {
                                            return accumulator + _template.SECTION_prints.cardTemplate(currentValue);
                                        }, '');
                                        break;
                                    default:
                                        content = _template.SECTION_prints.listTemplate(sectionData);
                                        break;
                                }
                            }
                        } else if (sectionName === 'gplogos') {
                            if (sectionData.images.length) {
                                let layout = 'list'; // 'list' / 'cards'
                                if (settings) {
                                    if (settings.listLayout) {
                                        layout = settings.listLayout;
                                    }
                                }
                                switch (layout) {
                                    case 'cards':
                                        content = sectionData.images.reduce((accumulator, currentValue, currentIndex, array) => {
                                            return accumulator + _template.SECTION_gp.cardTemplate(currentValue);
                                        }, '');
                                        break;
                                    default:
                                        content = _template.SECTION_gp.listTemplate(sectionData);
                                        break;
                                }
                            }
                        }
                        
                        return content;
                    }
                }

                return {
                    getContent: _action.getSectionContent,
                    attachEvents: _events.start,
                }
            })(),
            tabs: (function() {
                let _dataAccess = {
                    // returns an array of strings
                    getNames: function () {
                        return _DATA.map(function (sectionName) {
                            return sectionName[0];
                        });
                    }
                };

                let _template = {
                    title: function (options) {
                        return '<a class="nav-link ' + (options.active ? 'active' : '') + '" id="v-pills-' + options.id + '-tab" data-toggle="pill" href="#v-pills-' + options.id + '" role="tab" aria-controls="v-pills-' + options.id + '" aria-selected="true">' + options.name + '</a>'
                    },
                    section: function (options) {
                        return [
                            '<div class="tab-pane fade show ' + (options.active ? 'active' : '') + '" id="v-pills-' + options.id + '" role="tabpanel" aria-labelledby="v-pills-' + options.id + '-tab">',
                            '</div>'
                        ].join('');
                    },
                    filters: function () { }
                };

                let _action = {
                    // returns (first found) section settings from initialisation or OBJ null if none found
                    getSectionSettings: function (tabName, settings) {
                        if (settings) {
                            let sectionSettings = settings.sections.filter(function (x) {
                                return x.section.toLowerCase() === tabName.toLowerCase();
                            });
                            return sectionSettings.length ? sectionSettings[0] : null
                        } else {
                            return null;
                        }
                    },
                    addTabTitle: function (tabName, tabsId) {
                        let currentTabTitleMarkup = _template.title({
                            name: tabName,
                            id: tabName.toLowerCase().replace(/\s+/g, ''),
                            active: $('#' + tabsId).children().length ? false : true
                        });
                        $('#' + tabsId).append(currentTabTitleMarkup);
                    },
                    addTabSectionMarkup: function (tabName, tabsId) {
                        let currentTabSectionMarkup = _template.section({
                            id: tabName.toLowerCase().replace(/\s+/g, ''),
                            active: $('#' + tabsId + 'Content').children().length ? false : true
                        });
                        $('#' + tabsId + 'Content').append(currentTabSectionMarkup);
                    },
                    addSectionContent: function (tabsId, tabName, sectionContent) {
                        $('#' + tabsId + 'Content #v-pills-' + tabName.toLowerCase().replace(/\s+/g, '')).append(sectionContent);
                    },
                    create: function (settings) {
                        let tabsId = settings.id;
                        let tabNames = _dataAccess.getNames();

                        tabNames.forEach(function (tabName) {
                            // create tabs titles
                            _action.addTabTitle(tabName, tabsId);
        
                            // check if we have settings for current section and get them
                            let sectionSettings = _action.getSectionSettings(tabName, settings);
        
                            // create tabs sections
                            _action.addTabSectionMarkup(tabName, tabsId, sectionSettings);
                            _action.addSectionContent(tabsId, tabName, _component.section.getContent(tabName, sectionSettings));
                            _component.section.addEvents
                        });
        
                        setTimeout(function () {
                            $('#' + tabsId + ' li:first-child a').tab('show');
                        }, 0);
                    }
                };

                return {
                    create: _action.create,
                }
            })()
        };

        let _query = {};

        return {
            action: {
                createTabs: _component.tabs.create
            },
            query: {}
        }
    })();

    const publicAPI = {
        init: function (settings) {
            console.log(settings);
            UI.action.createTabs({
                id: 's2p-tabs',
                sections: [
                    {
                        section: 'Logo',
                        listLayout: 'list'
                    },
                    {
                        section: 'Prints',
                        listLayout: 'cards'
                    },                    
                    {
                        section: 'GP Logos',
                        listLayout: 'cards'
                    }
                ]
            });
        }
    }
    return publicAPI;
})();

$(document).ready(function () {
    s2p_marketing.init({
        listLayout: 'list' // 'list' / 'cards'
    });
})
