<?php

return [
    [
        'name' => 'Calendars',
        'flag' => 'calendar.index',
    ],
    [
        'name'        => 'Create',
        'flag'        => 'calendar.create',
        'parent_flag' => 'calendar.index',
    ],
    [
        'name'        => 'Edit',
        'flag'        => 'calendar.edit',
        'parent_flag' => 'calendar.index',
    ],
    [
        'name'        => 'Delete',
        'flag'        => 'calendar.destroy',
        'parent_flag' => 'calendar.index',
    ],
];
