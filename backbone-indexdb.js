// (c) 2011 Enginimation Studio (http://enginimation.com).
// backbone-indexdb.js may be freely distributed under the MIT license.
"use strict";
Porridge.Model = Backbone.Model.extend(
{
    initialize:function()
    {
        if(!this.get('id'))
        {
            this.id=UUID.generate();
            this.set({id:this.id});
        }
    },
    save:function()
    {
        var entityName = this.constructor.definition.name;
        Porridge.save(entityName,this.toJSON(),this.id);
    },
    destroy:function()
    {
        var entityName = this.constructor.definition.name;
        var keyName = this.constructor.definition.key||'id';
        var model = this;
        var success=function()
        {
            model.trigger('destroy', model, model.collection);
        }
        Porridge.remove(entityName,this.get(keyName),success);
    }
},
{
    definition:{}
});
Porridge.Collection = Backbone.Collection.extend(
{
    fetch:function(options)
    {
        options || (options = {});
        var collection = this;
        var entityName = this.model.definition.name;
        var addOne = function(data)
        {
            collection.add(new collection.model({attributes:data}));
        }
        Porridge.all(entityName,addOne,function()
        {
            collection.trigger('retrieved');
        },options.error);
    },
    fetchByKey:function(keyName,keyValue)
    {
        var collection = this;
        var entityName = this.model.definition.name;
        var addOne = function(data)
        {
            collection.add(new collection.model({attributes:data}));
        }
        Porridge.allByKey(entityName,keyName,keyValue,addOne,function()
        {
            collection.trigger('retrieved');
        });
    }
});