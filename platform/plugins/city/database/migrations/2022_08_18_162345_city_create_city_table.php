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
        Schema::create('cities', function (Blueprint $table) {
            $table->id();
            $table->string('code',4);
            $table->string('name', 255);
            $table->string('status', 60)->default('published');
            $table->timestamps();
        });

        Schema::create('cities_translations', function (Blueprint $table) {
            $table->string('lang_code');
            $table->integer('cities_id');
            $table->string('name', 255)->nullable();

            $table->primary(['lang_code', 'cities_id'], 'cities_translations_primary');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cities');
        Schema::dropIfExists('cities_translations');
    }
};
