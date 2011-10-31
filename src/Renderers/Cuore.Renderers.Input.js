CUORE.Renderers.Input = CUORE.Class(CUORE.Renderer, {

    draw: function (component) {
        this.panel = CUORE.Dom.createElement('div', {
            id: this.innerDivName(component.getName())
        }, this.container);

        this.label = CUORE.Dom.createElement('label', null, this.panel);

        this.addClass('inputJS');

        this.DOMInput = CUORE.Dom.createElement('input', {
            type: component.type
        }, this.panel);
    },

    updateWhenDrawn: function (component) {
        this.label.innerHTML = component.getText();
        this.DOMInput.value = component.value;
        this.DOMInput.disabled = component.disabled;
        this.setCurrentClasses();
    },

    getValue: function () {
        return this.panel && this.DOMInput.value;
    }
});
