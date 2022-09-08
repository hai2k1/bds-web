<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('calendars', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255);
            $table->string('status', 60)->default('published');
            $table->timestamps();
        });

        Schema::create('calendars_translations', function (Blueprint $table) {
            $table->string('lang_code');
            $table->integer('calendars_id');
            $table->string('name', 255)->nullable();

            $table->primary(['lang_code', 'calendars_id'], 'calendars_translations_primary');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('calendars');
        Schema::dropIfExists('calendars_translations');
    }
};
