{
    const cResponsiveGrid = document.querySelectorAll('.c-responsiveGrid');

    function cleanClasses(el) {
        for (var i = 1; i <= 12; i++) {
            el.classList.remove('--col' + i);
        }
        el.classList.remove('--colNaN');

        el.classList.remove('u-jcc');
        el.classList.remove('u-jcsb');
        el.classList.remove('u-jcfs');
        el.classList.remove('u-jcfe');
    }

    function managePadds(list, padd) {
        // remove
        for (var i = 1; i <= 50; i++) {
            for (let item of list) {
                item.classList.remove('u-pad' + i);
            }
        }
        // add
        for (let item of list) {
            item.classList.add('u-pad' + padd)
        }
    }

    function initResponsiveGrids() {
        cResponsiveGrid.forEach((item, index) => {
            let thisGrid = {
                breakVW: item.getAttribute('data-break-vw').split(', ').map(Number),
                breakCols: item.getAttribute('data-break-cols').split(', ').map(Number),
                breakPaddings: item.getAttribute('data-break-padds').split(', ').map(Number),
                breakJC: item.getAttribute('data-break-jc').split(', ').map(String),
                initCols: parseInt(item.getAttribute('data-init-cols')),
                initPadding: item.getAttribute('data-init-padd'),
                initJC: item.getAttribute('data-init-jc'),
                vw: window.innerWidth,
                childrens: item.children.length
            }
            let thisGrid__items = Array.prototype.slice.call(item.children,0);

            // console.log(thisGrid)
            // console.log(thisGrid__items)

            // init config
            item.classList.add('js-responsiveGrid')

            // resize configs
            let break__length = thisGrid.breakCols.length; //3
            if (break__length === thisGrid.breakVW.length) { //3
                for (let i = 0; i <= break__length; i++) {
                    if (thisGrid.breakVW[i] >= thisGrid.vw) {
                        cleanClasses(item);
                        managePadds(thisGrid__items, thisGrid.breakPaddings[i])
                        item.classList.add('--col' + thisGrid.breakCols[i]);
                        item.classList.add(thisGrid.breakJC[i]);
                        item.classList.add('u-calcPositionNegative' + thisGrid.breakPaddings[i])
                    }
                    if (thisGrid.vw > thisGrid.breakVW[0]) {
                        cleanClasses(item);
                        managePadds(thisGrid__items, thisGrid.initPadding)
                        item.classList.add('--col' + thisGrid.initCols);
                        item.classList.add(thisGrid.initJC);
                        item.classList.add('u-calcPositionNegative' + thisGrid.initPadding)
                    }
                }
            } else {
                console.log('Erro na construção do grid responsivo');
            }
        });
    }

    window.addEventListener('load', initResponsiveGrids);
    window.addEventListener('resize', initResponsiveGrids);
}
