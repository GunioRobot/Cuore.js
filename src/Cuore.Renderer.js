CUORE.Renderer = CUORE.Class(null, {

    init: function() {
        this.panel = null;
        this.panelClasses = ['innerComponentDiv'];
        this.container = document.body;
    },

    setContainer: function(aContainer) {
        this.container = document.getElementById(aContainer);
    },

    getContainer: function() {
        return this.container;
    },

    innerDivName: function(componentName) {
        var divNameSuffix = '_inner';
        return componentName + divNameSuffix;
    },

    render: function(component) {
        !this.panel && this.draw(component);
        this.update(component)
    },

    update: function(component) {
        this.panel && this.updateWhenDrawn(component);
    },

    updateWhenDrawn: function(component) {
        if (component.getText()) {
            this.panel.innerHTML = component.getText();
        }
    },

    erase: function() {
        if (this.panel) {
            this.panel.parentNode.removeChild(this.panel);
            delete this.panel;
        }
    },

    addClass: function(aClass) {
        this.panelClasses.push(aClass);
        this.panel && CUORE.Dom.addClass(this.panel, aClass);
    },

    removeClass: function(aClass) {
        this._eraseClassFromPanelClasses(aClass);
        this.panel && CUORE.Dom.removeClass(this.panel, aClass);
    },

    getCurrentClasses: function() {
        return this.panelClasses;
    },

    draw: function(component) {
        var divID = this.innerDivName(component.getName());

        this.panel = CUORE.Dom.createElement('div', {
            id: divID
        }, this.container);

        this.setCurrentClasses();
    },

    setCurrentClasses: function() {
        for (var i = 0, len = this.panelClasses.length; i < len; i++) {
            CUORE.Dom.addClass(this.panel, this.panelClasses[i]);
        }
        this.panel.className = this.panel.className.replace(/^\s+/g,'');
    },

    _eraseClassFromPanelClasses: function(arrayElement) {
        var len = this.panelClasses.length;
        var i = 0;
        while (i < len){
            if (this.panelClasses[i] === arrayElement) {
                this.panelClasses.splice(i, 1);
            } else {
                i++;
            }
        }
    }
});