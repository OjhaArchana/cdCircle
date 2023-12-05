import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";
import FormattingSettingsCard = formattingSettings.Card;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;
/**
 * Data Point Formatting Card
 */
declare class DataPointCardSettings extends FormattingSettingsCard {
    defaultColor: formattingSettings.ColorPicker;
    showAllDataPoints: formattingSettings.ToggleSwitch;
    fill: formattingSettings.ColorPicker;
    fillRule: formattingSettings.ColorPicker;
    fontSize: formattingSettings.NumUpDown;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
declare class mapViewCardSettings extends FormattingSettingsCard {
    showmapView: formattingSettings.ToggleSwitch;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
declare class backgroundColorCardSettings extends FormattingSettingsCard {
    showBackground: formattingSettings.ToggleSwitch;
    changeColor: formattingSettings.ColorPicker;
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
}
/**
* visual settings model class
*
*/
export declare class VisualFormattingSettingsModel extends FormattingSettingsModel {
    dataPointCard: DataPointCardSettings;
    mapView: mapViewCardSettings;
    backgroundColor: backgroundColorCardSettings;
    cards: (DataPointCardSettings | mapViewCardSettings | backgroundColorCardSettings)[];
}
export {};
