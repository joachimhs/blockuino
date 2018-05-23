/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {

    emberCliFontAwesome: {
      useScss: true
    },

    codemirror: {
      modes: ['clike'],
      themes: ['solarized', 'twilight']
    },

    fingerprint: {
      exclude: ['errors']
    }


    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.


  app.import('vendor/blockly/blockly_compressed.js');
  app.import('vendor/blockly/blocks_compressed.js');
  app.import('vendor/blockly/en.js');
  app.import('vendor/blockly/nb.js');
  app.import('vendor/blockly/arduino.js');
  app.import('vendor/blockly/custom_blocks.js');

  //NOTE: Should be able to import whole directory
  app.import('vendor/blockly/custom/arduino_blink.js')
  app.import('vendor/blockly/custom/arduino_pinmode.js');
  app.import('vendor/blockly/custom/arduino_pinmode_variable.js');
  app.import('vendor/blockly/custom/arduino_digitalWrite.js');
  app.import('vendor/blockly/custom/arduino_digital_write_variable.js');
  app.import('vendor/blockly/custom/arduino_digital_read.js');
  app.import('vendor/blockly/custom/arduino_analog_read.js');
  app.import('vendor/blockly/custom/arduino_analog_write.js');
  app.import('vendor/blockly/custom/arduino_serial_begin.js');
  app.import('vendor/blockly/custom/arduino_serial_print.js');
  app.import('vendor/blockly/custom/arduino_serial_available.js');
  app.import('vendor/blockly/custom/arduino_serial_read.js');
  app.import('vendor/blockly/custom/arduino_software_serial_include.js');
  app.import('vendor/blockly/custom/arduino_software_serial_begin.js');
  app.import('vendor/blockly/custom/arduino_software_serial_available.js');
  app.import('vendor/blockly/custom/arduino_software_serial_write.js');
  app.import('vendor/blockly/custom/arduino_software_serial_read.js');
  app.import('vendor/blockly/custom/arduino_map.js');
  app.import('vendor/blockly/custom/arduino_tone_ms.js');
  app.import('vendor/blockly/custom/arduino_tone.js');
  app.import('vendor/blockly/custom/arduino_no_tone.js');
  app.import('vendor/blockly/custom/arduino_setup.js');
  app.import('vendor/blockly/custom/arduino_loop.js');
  app.import('vendor/blockly/custom/arduino_delay.js');
  app.import('vendor/blockly/custom/arduino_delay_variable.js');
  app.import('vendor/blockly/custom/arduino_set_int_variable.js');
  app.import('vendor/blockly/custom/arduino_declare_variable.js');
  app.import('vendor/blockly/custom/arduino_declare_variable_with_value.js');
  app.import('vendor/blockly/custom/arduino_set_variable.js');
  app.import('vendor/blockly/custom/arduino_variable.js');
  app.import('vendor/blockly/custom/arduino_digital_port.js');
  app.import('vendor/blockly/custom/arduino_analog_port.js');
  app.import('vendor/blockly/custom/arduino_variable_value.js');
  app.import('vendor/blockly/custom/arduino_variable_char.js');
  app.import('vendor/blockly/custom/arduino_pulse_in.js');
  app.import('vendor/blockly/custom/arduino_declare_function.js');
  app.import('vendor/blockly/custom/function_return.js');
  app.import('vendor/blockly/custom/array_element.js');
  app.import('vendor/blockly/custom/arduino_function.js');
  app.import('vendor/blockly/custom/initialize_28byj.js');
  app.import('vendor/blockly/custom/setup_28byj.js');
  app.import('vendor/blockly/custom/stepper_function.js');
  app.import('vendor/blockly/custom/call_step_28byj.js');
  app.import('vendor/blockly/custom/comment.js');
  app.import('vendor/blockly/custom/variable_decrement.js');
  app.import('vendor/blockly/custom/variable_increment.js');
  app.import('vendor/blockly/custom/arduino_for.js');
  app.import('vendor/blockly/custom/arduino_repeat.js');
  app.import('vendor/blockly/custom/arduino_random.js');
  app.import('vendor/blockly/custom/arduino_high_low.js');
  app.import('vendor/blockly/custom/arduino_tones.js');
  app.import('vendor/blockly/custom/arduino_pixel_strip.js');
  app.import('vendor/blockly/custom/arduino_pixel_strip_begin.js');
  app.import('vendor/blockly/custom/arduino_pixel_strip_show.js');
  app.import('vendor/blockly/custom/arduino_pixel_strip_include.js');
  app.import('vendor/blockly/custom/arduino_pixel_strip_color.js');
  app.import('vendor/blockly/custom/arduino_pixels_color.js');
  app.import('vendor/blockly/custom/arduino_pixels_color_rgb.js');
  app.import('vendor/blockly/custom/arduino_pixels_color_set.js');
  app.import('vendor/blockly/custom/controls_if.js');
  app.import('vendor/blockly/custom/logic_compare.js');
  app.import('vendor/blockly/custom/logic_operation.js');
  app.import('vendor/blockly/custom/logic_negate.js');
  app.import('vendor/blockly/custom/logic_boolean.js');
  app.import('vendor/blockly/custom/logic_null.js');
  app.import('vendor/blockly/custom/math_arithmetic.js');
  app.import('vendor/blockly/custom/arduino_car_variables.js');
  app.import('vendor/blockly/custom/arduino_car_setup.js');
  app.import('vendor/blockly/custom/arduino_car_stop.js');
  app.import('vendor/blockly/custom/arduino_car_forwards.js');
  app.import('vendor/blockly/custom/arduino_car_backwards.js');
  app.import('vendor/blockly/custom/arduino_car_rotate_right.js');
  app.import('vendor/blockly/custom/arduino_bil_rotate_left.js');
  app.import('vendor/blockly/custom/arduino_car_analog_speed.js');
  app.import('vendor/blockly/custom/arduino_car_rf_speed.js');
  app.import('vendor/blockly/custom/arduino_car_set_speed.js');
  app.import('vendor/blockly/custom/ultrasonic_init.js');
  app.import('vendor/blockly/custom/ultrasonic_setup.js');
  app.import('vendor/blockly/custom/ultrasonic_distance.js');
  app.import('vendor/blockly/custom/servo_include.js');
  app.import('vendor/blockly/custom/servo_attach.js');
  app.import('vendor/blockly/custom/servo_write.js');
  app.import('vendor/blockly/custom/oled_include.js');
  app.import('vendor/blockly/custom/oled_setup.js');
  app.import('vendor/blockly/custom/oled_draw_pixel.js');
  app.import('vendor/blockly/custom/oled_set_cursor.js');
  app.import('vendor/blockly/custom/oled_print.js');
  app.import('vendor/blockly/custom/oled_update_display.js');
  app.import('vendor/blockly/custom/eeprom_include.js');
  app.import('vendor/blockly/custom/eeprom_write.js');
  app.import('vendor/blockly/custom/eeprom_update.js');
  app.import('vendor/blockly/custom/eeprom_read.js');
  app.import('vendor/blockly/custom/eeprom_length.js');
  app.import('vendor/blockly/custom/rf_receiver433_init.js');
  app.import('vendor/blockly/custom/rf_sender433_init.js');
  app.import('vendor/blockly/custom/rf_sender433_send.js');
  app.import('vendor/blockly/custom/rf_receiver433_setup.js');
  app.import('vendor/blockly/custom/rf_receiver433_read.js');
  app.import('vendor/blockly/custom/extract_from_array.js');
  app.import('vendor/blockly/custom/array_length.js');
  app.import('vendor/blockly/custom/char_to_int.js');
  app.import('vendor/blockly/custom/dht11_init.js');
  app.import('vendor/blockly/custom/dht11_setup.js');
  app.import('vendor/blockly/custom/dht11_read_temp.js');
  app.import('vendor/blockly/custom/dht11_read_humidity.js');
  app.import('vendor/blockly/custom/arduino_raw_thermistor_to_temp_function.js');
  app.import('vendor/blockly/custom/arduino_raw_thermistor_to_temp.js');
  app.import('vendor/blockly/custom/logic_compare.js');
  app.import('vendor/blockly/custom/controls_whileUntil.js');
  app.import('vendor/blockly/custom/arduino_list_increment.js');



  app.import('vendor/highlight/highlight.pack.js');
  app.import('vendor/highlight/solarized_light.css');

  app.import('bower_components/js-beautify/js/lib/beautify.js');

  app.import('vendor/lz-string/lz-string.js');
  app.import('vendor/filesaver/filesaver.js');

  app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');
  app.import('bower_components/bootstrap/dist/css/bootstrap.css');


  app.import('bower_components/font-awesome/css/font-awesome.css');
  app.import('bower_components/font-awesome/fonts/fontAwesome.otf');
  app.import('bower_components/font-awesome/fonts/fontawesome-webfont.eot');
  app.import('bower_components/font-awesome/fonts/fontawesome-webfont.svg');
  app.import('bower_components/font-awesome/fonts/fontawesome-webfont.ttf');
  app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff');
  app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff2');


  return app.toTree();
};
