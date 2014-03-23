module.exports = function(LOG, models, controllers){
    'use strict';
    var Q = require('q');
    var shared = require('./commonController')(LOG);


    var list = function list(){
        return Q(models.MasterSnapshot.findAll({include:[models.Snapshot, models.Suite]}));
    };

    var findById = function findById(id){
        return Q(models.Snapshot.find({where:{id:id}, include:[models.Snapshot, models.Suite]}));
    };

    var create = function create(properties, pageId){
        return snapshotFactory.build(properties, pageId);
    };

    var update = function update(id, properties){
        return Q(models.Snapshot.find(id)
            .success(function(snapshot){
                return snapshot.updateAttributes(properties);
            }));
    };

    var destroy = function destroy(id){
        return Q(models.Snapshot.find(id)
            .success(function(snapshot){
                return snapshot.destroy()
                    .success(function(){
                        return undefined;
                    });
            }));
    };

    return {
        list:list,
        create:create,
        update:update,
        findById:findById,
        destroy:destroy
    };

};