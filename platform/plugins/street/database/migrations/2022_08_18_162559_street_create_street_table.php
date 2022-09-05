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
        Schema::create('streets', function (Blueprint $table) {
            $table->id();
            $table->string('code',4);
            $table->string('name', 255);
            $table->string('district',4);
            $table->string('status', 60)->default('published');
            $table->timestamps();
        });

        Schema::create('streets_translations', function (Blueprint $table) {
            $table->string('lang_code');
            $table->integer('streets_id');
            $table->string('name', 255)->nullable();

            $table->primary(['lang_code', 'streets_id'], 'streets_translations_primary');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('streets');
        Schema::dropIfExists('streets_translations');
    }
};
