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
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('code',255);
            $table->string('name', 255);
            $table->string('district',255);
            $table->string('status', 60)->default('published');
            $table->timestamps();
        });

        Schema::create('projects_translations', function (Blueprint $table) {
            $table->string('lang_code');
            $table->integer('projects_id');
            $table->string('name', 255)->nullable();

            $table->primary(['lang_code', 'projects_id'], 'projects_translations_primary');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('projects');
        Schema::dropIfExists('projects_translations');
    }
};
