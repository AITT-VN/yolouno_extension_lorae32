Blockly.Blocks['yolo_uno_lora_create'] = {
  init: function() {
    this.jsonInit(
      {
          "type": "start",
          "message0": "Lora E32 khởi tạo TX %1 RX %2",
          "args0": [
            {
              "type": "field_dropdown",
              "name": "tx",
              "options": [
                [
                  "D3",
                  "D3"
                ],
                [
                  "D4",
                  "D4"
                ],
                [
                  "D5",
                  "D5"
                ],
                [
                  "D6",
                  "D6"
                ],
                [
                  "D7",
                  "D7"
                ],
                [
                  "D8",
                  "D8"
                ],
                [
                  "D9",
                  "D9"
                ],
                [
                  "D10",
                  "D10"
                ],
                [
                  "D11",
                  "D11"
                ],
                [
                  "D12",
                  "D12"
                ],
                [
                  "D13",
                  "D13"
                ],
                [
                  "D0",
                  "D0"
                ],
                [
                  "D1",
                  "D1"
                ],
                [
                  "D2",
                  "D2"
                ]
              ]
            },
            {
              "type": "field_dropdown",
              "name": "rx",
              "options": [
                [
                  "D3",
                  "D3"
                ],
                [
                  "D4",
                  "D4"
                ],
                [
                  "D5",
                  "D5"
                ],
                [
                  "D6",
                  "D6"
                ],
                [
                  "D7",
                  "D7"
                ],
                [
                  "D8",
                  "D8"
                ],
                [
                  "D9",
                  "D9"
                ],
                [
                  "D10",
                  "D10"
                ],
                [
                  "D11",
                  "D11"
                ],
                [
                  "D12",
                  "D12"
                ],
                [
                  "D13",
                  "D13"
                ],
                [
                  "D0",
                  "D0"
                ],
                [
                  "D1",
                  "D1"
                ],
                [
                  "D2",
                  "D2"
                ]
              ]
            }
          ],
          "previousStatement": null,
          "nextStatement": null,
          "colour": "#505170",
          "tooltip": "",
          "helpUrl": ""
        }
    );
      }
  };

Blockly.Python['yolo_uno_lora_create'] = function(block) {
    var tx = block.getFieldValue('tx');
    var rx = block.getFieldValue('rx');
    Blockly.Python.definitions_['import_yolo_uno'] = 'from yolo_uno import *';
    Blockly.Python.definitions_['import_machine'] = 'from lora_e32 import ebyteE32';
    Blockly.Python.definitions_['import_utime'] = 'import utime';
    Blockly.Python.definitions_['lora_e32_init'] = 'e32 = ebyteE32(tx_pin ='+ tx + '_PIN,' + 'rx_pin =' + rx +'_PIN, debug = False)\n';
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    return code;
};

Blockly.Blocks['yolo_uno_lora_show'] = {
  init: function() {
    this.jsonInit(
      {
          "type": "start",
          "message0": "in ra cấu hình hiện tại",
          "args0": [],
          "previousStatement": null,
          "nextStatement": null,
          "colour": "#505170",
          "tooltip": "",
          "helpUrl": ""
        }
    );
      }
  };

Blockly.Python['yolo_uno_lora_show'] = function(block) {
    Blockly.Python.definitions_['import_yolo_uno'] = 'from yolo_uno import *';
    Blockly.Python.definitions_['import_machine'] = 'from lora_e32 import ebyteE32';
    Blockly.Python.definitions_['import_utime'] = 'import utime';
    // TODO: Assemble JavaScript into code variable.
    var code = 'e32.getConfig()\n';
    return code;
};

Blockly.Blocks['yolo_uno_lora_config'] = {
  init: function() {
    this.jsonInit(
      {
          "type": "start",
          "message0": "cấu hình chế độ %1 địa chỉ %2 %3 kênh %4 %5",
          "args0": [
            {
              "type": "field_dropdown",
              "name": "TRANSMODE",
              "options": [
                [
                  "transparent",
                  "0"
                ],
                [
                  "fixed P2P",
                  "1"
                ],
                [
                  "fixed broadcast",
                  "2"
                ],
                [
                  "fixed monitor",
                  "3"
                ]
              ]
            },
            {
              "type": "input_value",
              "name": "ADDRESS",
            },
            {
              "type": "input_dummy",
            },
            {
              "type": "input_value",
              "name": "CHANNEL",
            },
            {
              "type": "input_dummy",
            }
          ],
          "previousStatement": null,
          "nextStatement": null,
          "colour": "#505170",
          "tooltip": "",
          "helpUrl": ""
        }
    );
      }
  };

Blockly.Python['yolo_uno_lora_config'] = function(block) {
    var transmode = block.getFieldValue('TRANSMODE')==0?0:1;
    var address = Blockly.JavaScript.valueToCode(block, 'ADDRESS', Blockly.JavaScript.ORDER_ATOMIC);
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_yolo_uno'] = 'from yolo_uno import *';
    Blockly.Python.definitions_['import_machine'] = 'from lora_e32 import ebyteE32';
    Blockly.Python.definitions_['import_utime'] = 'import utime';
    // TODO: Assemble JavaScript into code variable.
    var code = 'e32.start('+ address + ',' + channel +',' + transmode +')\n';
    return code;
};

Blockly.Blocks['yolo_uno_lora_send'] = {
    init: function() {
        this.jsonInit(
            {
                "type": "yolo_uno_lora_send",
                "message0": "gửi  %1 %2 %3",
                "args0": [
                  {
                    "type": "input_dummy",
                  },
                  {
                    "type": "input_value",
                    "name": "MESSAGE",
                  },
                  {
                    "type": "input_dummy",
                  }
                ],
                "previousStatement": null,
                "nextStatement": null,
                "colour": "#505170",
                "tooltip": "",
                "helpUrl": ""
              }
        );
            }
};

Blockly.Python['yolo_uno_lora_send'] = function(block) {
  var message = Blockly.Python.valueToCode(block, 'MESSAGE', Blockly.Python.ORDER_ATOMIC);
  var to_address = block.getFieldValue('ADDRESS');
  var to_channel = block.getFieldValue('CHANNEL');
  // TODO: Assemble Python into code variable.
  var code = "e32.sendMessage({ 'msg'" +":"+ message+"}, useChecksum=True)\n";
  return code;
};

Blockly.Blocks['yolo_uno_lora_send_to'] = {
  init: function() {
      this.jsonInit(
          {
              "type": "yolo_uno_lora_send_to",
              "message0": "gửi  %1 %2 đến địa chỉ %3 %4 kênh %5 %6",
              "args0": [
                {
                  "type": "input_dummy",
                },
                {
                  "type": "input_value",
                  "name": "MESSAGE",
                },
                {
                  "type": "input_value",
                  "name": "ADDRESS",
                },
                {
                  "type": "input_dummy",
                },
                {
                  "type": "input_value",
                  "name": "CHANNEL",
                },
                {
                  "type": "input_dummy",
                }
              ],
              "previousStatement": null,
              "nextStatement": null,
              "colour": "#505170",
              "tooltip": "",
              "helpUrl": ""
            }
      );
          }
};

Blockly.Python['yolo_uno_lora_send_to'] = function(block) {
  var message = Blockly.Python.valueToCode(block, 'MESSAGE', Blockly.Python.ORDER_ATOMIC);
  var to_address = Blockly.JavaScript.valueToCode(block, 'ADDRESS', Blockly.JavaScript.ORDER_ATOMIC);
  var to_channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "e32.sendMessageTo("+to_address+","+ to_channel+", { 'msg'" +":"+ message+"}, useChecksum=True)\n";
  return code;
};

Blockly.Blocks['yolo_uno_lora_receive'] = {
    init: function() {
        this.jsonInit(
            {
                "type": "yolo_uno_lora_receive",
                "message0": "thông tin nhận được ",
                "output": null,
                "colour": "#505170",
                "tooltip": "",
                "helpUrl": ""
              }
        );
            }
};

Blockly.Python['yolo_uno_lora_receive'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = "e32.received_data['msg']";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['yolo_uno_lora_check'] = {
  init: function() {
      this.jsonInit(
        {
          "type": "yolo_uno_lora_check",
          "message0": "có dữ liệu gửi đến?",
          "args0": [
          ],
          "output": null,
          "colour": "#505170",
          "tooltip": "",
          "helpUrl": ""
        }
      );
  }
};

Blockly.Python['yolo_uno_lora_check'] = function(block) {
  Blockly.Python.definitions_['import_yolo_uno'] = 'from yolo_uno import *';
  Blockly.Python.definitions_['import_machine'] = 'from lora_e32 import ebyteE32';
  var code = "e32.recvMessage(useChecksum=True)!= None";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};