<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTranslationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::defaultStringLength(191);
        Schema::create('translations', function (Blueprint $table) {
            $table->increments('id');

            $table->string('table_name',150);
            $table->string('column_name',150);
            $table->integer('foreign_key')->unsigned();
            $table->string('locale',180);

            $table->text('value');

            //$table->unique(['table_name', 'column_name', 'foreign_key', 'locale']);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('translations');
    }
}
