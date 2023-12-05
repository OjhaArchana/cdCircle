

"use strict";

import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";

import FormattingSettingsCard = formattingSettings.Card;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;

/**
 * Data Point Formatting Card
 */
class DataPointCardSettings extends FormattingSettingsCard {
    defaultColor = new formattingSettings.ColorPicker({
        name: "defaultColor",
        displayName: "Default color",
        value: { value: "" }
    });

    showAllDataPoints = new formattingSettings.ToggleSwitch({
        name: "showAllDataPoints",
        displayName: "Show all",
        value: true
    });

    fill = new formattingSettings.ColorPicker({
        name: "fill",
        displayName: "Fill",
        value: { value: "" }
    });

    fillRule = new formattingSettings.ColorPicker({
        name: "fillRule",
        displayName: "Color saturation",
        value: { value: "" }
    });

    fontSize = new formattingSettings.NumUpDown({
        name: "fontSize",
        displayName: "Text Size",
        value: 12
    });

    name: string = "dataPoint";
    displayName: string = "Data colors";
    slices: Array<FormattingSettingsSlice> = [this.defaultColor, this.showAllDataPoints, this.fill, this.fillRule, this.fontSize];
}

class mapViewCardSettings extends FormattingSettingsCard {
    // defaultColor = new formattingSettings.ColorPicker({
    //     name: "defaultColor",
    //     displayName: "Default color",
    //     value: { value: "" }
    // });

    showmapView = new formattingSettings.ToggleSwitch({
        name: "showmapView",
        displayName: "ShowMap",
        value: true
    });


    // fill = new formattingSettings.ColorPicker({
    //     name: "fill",
    //     displayName: "Fill",
    //     value: { value: "" }
    // });

    // fillRule = new formattingSettings.ColorPicker({
    //     name: "fillRule",
    //     displayName: "Color saturation",
    //     value: { value: "" }
    // });

    // fontSize = new formattingSettings.NumUpDown({
    //     name: "fontSize",
    //     displayName: "Text Size",
    //     value: 12
    // });

    name: string = "mapView";
    displayName: string = "Map";
    slices: Array<FormattingSettingsSlice> = [this.showmapView];
}

class backgroundColorCardSettings extends FormattingSettingsCard {
    // defaultColor = new formattingSettings.ColorPicker({
    //     name: "defaultColor",
    //     displayName: "Default color",
    //     value: { value: "" }
    // });

    showBackground = new formattingSettings.ToggleSwitch({
        name: "showBackground",
        displayName: "Background",
        value: true
    });


    
 public changeColor = new formattingSettings.ColorPicker({
    name: "changeColor",
    displayName: "Color",
    value: { value: "#a0d1ff" }
   });


    // fill = new formattingSettings.ColorPicker({
    //     name: "fill",
    //     displayName: "Fill",
    //     value: { value: "" }
    // });

    // fillRule = new formattingSettings.ColorPicker({
    //     name: "fillRule",
    //     displayName: "Color saturation",
    //     value: { value: "" }
    // });

    // fontSize = new formattingSettings.NumUpDown({
    //     name: "fontSize",
    //     displayName: "Text Size",
    //     value: 12
    // });

    name: string = "backgroundColor";
    displayName: string = "Background";
    slices: Array<FormattingSettingsSlice> = [this.showBackground, this.changeColor];
}
/**
* visual settings model class
*
*/
export class VisualFormattingSettingsModel extends FormattingSettingsModel {
    // Create formatting settings model formatting cards
    dataPointCard = new DataPointCardSettings();
    mapView = new mapViewCardSettings();
    backgroundColor = new backgroundColorCardSettings();

  cards = [this.dataPointCard, this.mapView, this.backgroundColor];
}
