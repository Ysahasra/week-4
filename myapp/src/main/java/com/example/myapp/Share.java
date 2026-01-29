package com.example.myapp;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Share {

    @GetMapping("/notion")
    public Map<Object,Object> notion(){
        Map<Object,Object> res=new  HashMap<>();
        res.put("msg","material");
        res.put("notion","https://steady-shawl-7c0.notion.site/CRUD-OPERATIONS-2eeff9567a0780938a56cd1b4320a553");
        res.put("sucess",true);
        return res;
    }

    
}
