Ext.define('SampleModule.model.Adjustment', {
    extend: 'iRely.BaseEntity',

    requires: [
        'SampleModule.model.AdjustmentDetail',
        'SampleModule.model.AdjustmentNote',
        'Entity.model.AdjustmentNote',
        'Ext.data.Field'
    ],

    idProperty: 'intInventoryAdjustmentId',

    fields: [
        { name: 'intInventoryAdjustmentId', type: 'int' },
        { name: 'intLocationId', type: 'int', allowNull: true },
        { name: 'dtmAdjustmentDate', type: 'date', dateFormat: 'c', dateWriteFormat: 'Y-m-d' },
        { name: 'intAdjustmentType', type: 'int', allowNull: true },
        { name: 'strAdjustmentNo', type: 'string' },
        { name: 'strDescription', type: 'string' },
        { name: 'ysnPosted', type: 'boolean'},
        { name: 'intSort', type: 'int', allowNull: true }
    ],

    validators: [
        { type: 'presence', field: 'intLocationId' },
        { type: 'presence', field: 'dtmAdjustmentDate' },
        { type: 'presence', field: 'intAdjustmentType' }
    ]
});