<?php

namespace App\Http\Livewire;

use Carbon\Carbon;
use Livewire\Component;

class AppointmentsCalendar extends Component
{
    public function render()
    {
        return view('livewire.appointments-calendar');
    }
    public function events() : \Illuminate\Support\Collection
    {
        return collect([
            [
                'id' => 1,
                'title' => 'Breakfast',
                'description' => 'Pancakes! 🥞',
                'date' => Carbon::today(),
            ],
            [
                'id' => 2,
                'title' => 'Meeting with Pamela',
                'description' => 'Work stuff',
                'date' => Carbon::tomorrow(),
            ],
        ]);
    }
}
