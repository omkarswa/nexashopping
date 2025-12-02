package com.nexashop.backend.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI nexaShopOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("NexaShop API")
                        .description("Backend API for NexaShop E-commerce Application")
                        .version("1.0"));
    }
}
