'use strict';
/*
let _DATA = (function() {
    return {
        logo: {
            title: 'Logo',
            images: [
                {
                    name: 's2p_logo_purple_bkg.eps',
                    width: -1,
                    height: -1,
                    dpi: -1
                }
            ]
        }
    }
})();
*/

let s2p_marketing = (function () {

    let DATA = {
        
    }

    let sectionActions = {
        logo: {
            _consts: {
                vectorialFormats: ['EPS', 'SVG', 'AI']
            },
            cardTemplate: function (imgObj) {
                let card = [
                    '<div class="s2p-logo-card card">',
                        '<div class="card-img-top">',
                            '<img  src="img/s2p-logo/' + imgObj.name + '"/>',
                        '</div>',
                        '<div class="card-body  text-center">',
                            '<h5 class="card-title">' + imgObj.name + '</h5>',
                            '<p class="card-text">',
                                imgObj.width !== -1 ? '<span class="badge badge-pill badge-light">Width: ' + imgObj.width + '</span> ' : '',
                                imgObj.height !== -1 ? '<span class="badge badge-pill badge-light">Height: ' + imgObj.height + '</span> ' : '',
                                imgObj.dpi !== -1 ? '<span class="badge badge-pill badge-light">DPI: ' + imgObj.dpi + '</span> ' : '',
                                '<span class="badge badge-pill badge-secondary">Format: ' + imgObj.name.split('.').pop().toUpperCase() + '</span>',
                            '</p>',
                            '<a href="img/s2p-logo/' + imgObj.name + '" class="btn btn-info">',
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
                    function getCurrentItemColSize(item) {
                        let colSize = '3 col-md-1  text-left text-md-center';
                        if (item === 'name') {
                            colSize = '12 col-md-5';
                        } else if( item === 'format') {
                            colSize = '3 col-md-1  text-left text-md-center';
                        }
                        return colSize;
                    }
                    
                    let header = '<div class="s2p-logo-listHeader row no-gutters_  mb-2">';
                    header += '<div class="headerThumb col-4 col-md-2  d-none d-md-block"></div>';

                    sectionFilters.map(function(item) {
                        header += '<div class="header' + item.charAt(0).toUpperCase() + item.slice(1) + ' col-' + getCurrentItemColSize(item) + '">' + item + '</div>';
                    });
                    header += '<div class="headerAction col-' + getCurrentItemColSize('action') + '"></div>';
                    header += '</div>';
    
                    return header;
                };

                function listRowTemplate (sectionItems) {
                    let rows = [];
                    sectionItems.map(function(item) {
                        rows.push([
                            '<div class="s2p-logo-listRow row no-gutters_  py-1">',
                                '<div class="itemThumb col-4 col-md-2">' + (item.name.split('.').pop().toUpperCase() === 'EPS' ? 'N/A' : ('<img src="img/s2p-logo/' + item.name + '">')) + '</div>',
                                '<div class="itemName col-8 col-md-5">' + item.name.substr(0, item.name.length-4) + '</div>',
                                '<div class="itemWidth col-1  mr-3 mr-md-0">' + (item.width === -1 ? '∞' : item.width) + '</div>',
                                '<div class="itemHeight col-1  mr-3 mr-md-0">' + (item.height === -1 ? '∞' : item.height) + '</div>',
                                '<div class="itemDpi col-1  mr-3 mr-md-0">' + (item.dpi === -1 ? '∞' : item.dpi) + '</div>',
                                '<div class="itemFormat col-1  mr-3 mr-md-0">' + item.name.split('.').pop().toUpperCase() + '</div>',
                                '<div class="itemFormat col-1">',
                                    '<a href="img/s2p-logo/' + item.name + '" class="" title="Download">',
                                        '<img class="svg-icon" src="img/icons/arrow-down-circle-fill-info.svg"/>',
                                    '</a>',
                                '</div>',
                            '</div>'
                        ].join(''));
                    });
                    
                    return rows.join('');
                };

                // create list markup
                let list = '<div class="s2p-logo-list">';
                if (sectionData.filters.length) {
                    list += listHeaderTemplate(sectionData.filters);
                }
                list += listRowTemplate(sectionData.images);
                list += '</div>';

                return list;
            }
        }
    }

    let UI = {
        component: {
            tabs: {
                id: 's2p-tabs',
                template: {
                    title: function (options) {
                        return '<a class="nav-link ' + (options.active ? 'active' : '') + '" id="v-pills-' + options.id + '-tab" data-toggle="pill" href="#v-pills-' + options.id + '" role="tab" aria-controls="v-pills-' + options.id + '" aria-selected="true">' + options.name + '</a>'
                    },
                    section: function (options) {
                        return [
                            '<div class="tab-pane fade show ' + (options.active ? 'active' : '') + '" id="v-pills-' + options.id + '" role="tabpanel" aria-labelledby="v-pills-' + options.id + '-tab">',
                            options.content,
                            '</div>'
                        ].join('');
                    },
                    filters: function () { }
                },
                getNames: function () {
                    return _DATA.map(function (sectionName) {
                        return sectionName[0];
                    });
                },
                getSectionData: function (sectionName) {
                    return _DATA.filter(function (section) {
                        return section[0] === sectionName;
                    })[0][1];
                },
                getSectionContent: function (section, settings) {
                    let sectionData = UI.component.tabs.getSectionData(section);
                    let sectionName = section.toLowerCase().replace(/\s+/g, '');
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
                                        return accumulator + sectionActions.logo.cardTemplate(currentValue);
                                    }, '');
                                    break;
                                default:
                                    content = sectionActions.logo.listTemplate(sectionData);
                                    break;
                            }
                        }
                    }
                    else if (sectionName = 'prints') {

                    }
                    
                    return content;
                }
            }
        },
        action: {
            createTabs: function (settings) {
                
                let tabsId = UI.component.tabs.id;

                let tabNames = UI.component.tabs.getNames();
                tabNames.map(function (tabName) {
                    // create tabs titles
                    let currentTabTitleMarkup = UI.component.tabs.template.title({
                        name: tabName,
                        id: tabName.toLowerCase().replace(/\s+/g, ''),
                        active: $('#' + tabsId).children().length ? false : true
                    });
                    $('#' + tabsId).append(currentTabTitleMarkup);

                    // check if we have settings for current section
                    let sectionSettings = settings.filter(function (x) {
                        return x.section.toLowerCase() === tabName.toLowerCase();
                    });

                    // create tabs sections
                    let currentTabSectionMarkup = UI.component.tabs.template.section({
                        id: tabName.toLowerCase().replace(/\s+/g, ''),
                        active: $('#' + tabsId + 'Content').children().length ? false : true,
                        content: UI.component.tabs.getSectionContent(tabName, sectionSettings.length ? sectionSettings[0] : null)
                    });
                    $('#' + tabsId + 'Content').append(currentTabSectionMarkup);
                });

                setTimeout(function () {
                    $('#' + tabsId + ' li:first-child a').tab('show');
                }, 0);

            }
        },
        query: {

        }
    }

    let publicAPI = {
        init: function () {
            UI.action.createTabs([
                {
                    section: 'Logo1',
                    listLayout: 'list'
                }
            ]);
            
        }
    }
    return publicAPI;
})();

$(document).ready(function () {
    s2p_marketing.init();
})
