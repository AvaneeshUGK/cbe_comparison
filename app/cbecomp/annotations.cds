using Catalogcbeservice as service from '../../srv/service';

annotate service.Item with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Value : tab1_rel.PAN_Number,
            Label : 'PAN_Number',
        },
        {
            $Type : 'UI.DataField',
            Value : tab1_rel.SBG,
            Label : 'SBG',
        },
        {
            $Type : 'UI.DataField',
            Value : tab1_rel.SBU,
            Label : 'SBU',
        },
        {
            $Type : 'UI.DataField',
            Value : tab1_rel.BUORPurchasing_Group,
            Label : 'BUORPurchasing_Group',
        },
        {
            $Type : 'UI.DataField',
            Value : tab1_rel.Plant_Code,
            Label : 'Plant_Code',
        },
    ]
);
