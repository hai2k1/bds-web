<?php

return [
    [
        'name' => 'Wards',
        'flag' => 'wards.index',
    ],
    [
        'name'        => 'Create',
        'flag'        => 'wards.create',
        'parent_flag' => 'wards.index',
    ],
    [
        'name'        => 'Edit',
        'flag'        => 'wards.edit',
        'parent_flag' => 'wards.index',
    ],
    [
        'name'        => 'Delete',
        'flag'        => 'wards.destroy',
        'parent_flag' => 'wards.index',
    ],
];
