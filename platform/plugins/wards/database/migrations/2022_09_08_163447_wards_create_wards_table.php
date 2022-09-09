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
        Schema::create('wards', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255);
            $table->string('code', 255);
            $table->integer('district');
            $table->string('status', 60)->default('published');
            $table->timestamps();
        });

        Schema::create('wards_translations', function (Blueprint $table) {
            $table->string('lang_code');
            $table->integer('wards_id');
            $table->string('name', 255)->nullable();

            $table->primary(['lang_code', 'wards_id'], 'wards_translations_primary');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wards');
        Schema::dropIfExists('wards_translations');
    }
};
