idf_component_register(SRCS "hello_world_main.c" "lvgl_demo_ui.c"
                       PRIV_REQUIRES spi_flash REQUIRES esp_timer
                       INCLUDE_DIRS "")
