<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Solution extends Model
{

    public function categoryId(){
        return $this->belongsTo(ProductCategory::class,'category_id');
    }
}
