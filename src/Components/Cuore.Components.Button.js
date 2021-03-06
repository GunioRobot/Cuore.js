CUORE.Components.Button = CUORE.Class(CUORE.Component, {

    init: function(buttonName, key) {
        CUORE.Components.Button.super.init.call(this);

        this.service = 'BUTTON';
        this.data = null;
        this.text = 'CLICK!';
        this.buttonName = buttonName || 'aButton';
        this.enabled = true;
        this.asynchronous = false;
        this.setRenderer(new CUORE.Renderers.Button());
        this.setI18NKey(key);
    },

    click: function() {
        var service = this.getService();
        service && service.execute(this.buttonName, this.data);
    },

    disable: function() {
        this.enabled = false;
        this.updateRender();
    },

    enable: function() {
        this.enabled = true;
        this.updateRender();
    },

    getButtonName: function() {
        return this.buttonName;
    },

    setData: function(data) {
        this.data = data;
    },

    isEnable: function() {
        return this.enabled;
    }
});