"use strict";

import powerbi from "powerbi-visuals-api";
import * as d3 from "d3";
import * as topojson from "topojson";
import { FormattingSettingsService } from "powerbi-visuals-utils-formattingmodel";
import "./../style/visual.less";
import "./statesData";

import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
import ISelectionId = powerbi.visuals.ISelectionId;
import VisualTooltipDataItem = powerbi.extensibility.VisualTooltipDataItem;

import { statesJson } from "./statesData";
import {
  createTooltipServiceWrapper,
  ITooltipServiceWrapper,
  TooltipEventArgs,
} from "powerbi-visuals-utils-tooltiputils";

import { VisualFormattingSettingsModel } from "./settings";
import { select, selectAll } from "d3";
import ISelectionManager = powerbi.extensibility.ISelectionManager;

interface IDatapoint {
  state: any;
  selectionId: ISelectionId;
}

export class Visual implements IVisual {
  private target: HTMLElement;
  private formattingSettings: VisualFormattingSettingsModel;
  private formattingSettingsService: FormattingSettingsService;
  public SVG: any;
  public width: number = 1000;
  public height: number = 700;
  public zoom: any;
  private selectionManager: ISelectionManager;
  private tooltipServiceWrapper: ITooltipServiceWrapper;
  public host: IVisualHost;
  // private host: IvisualHost;
  public path: any;
  public g: any;

  constructor(options: VisualConstructorOptions) {
    // console.log('Visual constructor', options);
    this.formattingSettingsService = new FormattingSettingsService();
    this.host = options.host;
    this.selectionManager = this.host.createSelectionManager();
    this.tooltipServiceWrapper = createTooltipServiceWrapper(
      this.host.tooltipService,
      options.element
    );

    this.target = options.element;
    this.SVG = select(this.target)
      .append("svg")
      .classed("SVG", true)
      .attr("width", this.width)
      // .style("display", this.formattingSettings.backgroundColor.showBackground.value ? "block" : "none")
      .attr("height", this.height);
    // let active = d3.select(null);
    // // const projection = d3.geoAlbersUsa().scale(1290).translate([this.width / 2, this.height / 2]);
    // const zoom = d3.zoom().scaleExtent([1, 8]).on("zoom", zoomed);
    // const path = d3.geoPath().projection(null);

    // this.SVG.append("rect")
    //   .attr("class", "background")
    //   .attr("width", this.width)
    //   .attr("height", this.height)
    //   .on("click", reset);

    // const g = this.SVG.append("g").style("stroke-width", "1.5px");

    // const us = statesJson;


    // const states = g
    //   .append("g")
    //   .selectAll("path")
    //   .data(topojson.feature(us, us.objects.states).features)
    //   .enter()
    //   .append("path")
    //   .attr("d", path)
    //   .attr("class", "feature")
    //   .on("click", (e, d) => clicked(d));

    // states.append("title").text((d) => d.properties.name);

    // g.append("path")
    //   .datum(topojson.mesh(us, us.objects.states, (a: any, b: any) => a !== b))
    //   .attr("class", "mesh")
    //   .attr("d", path);

    // function clicked(d) {
    //   if (active.node() === this) return reset();

    //   console.log(d);
    //   active.classed("active", false);
    //   active = d3.select(this).classed("active", true);

    //   var bounds = path.bounds(d),
    //     dx = bounds[1][0] - bounds[0][0],
    //     dy = bounds[1][1] - bounds[0][1],
    //     x = (bounds[0][0] + bounds[1][0]) / 2,
    //     y = (bounds[0][1] + bounds[1][1]) / 2,
    //     scale = Math.max(
    //       1,
    //       Math.min(8, 0.9 / Math.max(dx / this.width, dy / this.height))
    //     ),
    //     translate = [this.width / 2 - scale * x, this.height / 2 - scale * y];

    //   this.SVG.transition()
    //     .duration(750)
    //     .call(
    //       zoom.transform,
    //       d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale)
    //     );
    // }

    // function reset() {
    //   active.classed("active", false);
    //   active = d3.select(null);

    //   this.SVG.transition().duration(750).call(zoom.transform, d3.zoomIdentity);
    // }

    // function zoomed(event) {
    //   g.style("stroke-width", 1.5 / event.transform.k + "px");
    //   g.attr("transform", event.transform);
    // }

    // function stopped(event) {
    //   if (event.defaultPrevented) event.stopPropagation();
    // }
  }

  public update(options: VisualUpdateOptions) {
    this.formattingSettings =
      this.formattingSettingsService.populateFormattingSettingsModel(
        VisualFormattingSettingsModel,
        options.dataViews
      );

    let active = d3.select(null);
    // const projection = d3.geoAlbersUsa().scale(1290).translate([this.width / 2, this.height / 2]);
    const zoom = d3.zoom().scaleExtent([1, 8]).on("zoom", zoomed);
    const path = d3.geoPath().projection(null);

    this.SVG.append("rect")
      .attr("class", "background")
      .attr("width", this.width)
      .attr("height", this.height)
      .on("click", reset);

    const g = this.SVG.append("g").style("stroke-width", "1.5px");

    const us = statesJson;

    const states = g
      .append("g")
      .selectAll("path")
      .classed("states", true)
      .data(topojson.feature(us, us.objects.states).features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("class", "feature")
      .style("display", this.formattingSettings.mapView.showmapView.value ? "block" : "none")
      .on("click", (e, d) => clicked(d, category));
   

    states.append("title").text((d) => d.properties.name);

    g.append("path")
      .datum(topojson.mesh(us, us.objects.states, (a: any, b: any) => a !== b))
      .attr("class", "mesh")
      .attr("d", path);


    function zoomed(event) {
      g.style("stroke-width", 1.5 / event.transform.k + "px");
      g.attr("transform", event.transform);
    }

    // function stopped(event) {
    //   if (event.defaultPrevented) event.stopPropagation();
    // }


    function getTooltipData(data: any): VisualTooltipDataItem[] {
      let tooltipDataArray: VisualTooltipDataItem[] = [];

      tooltipDataArray.push({
        header: data.states,
        displayName: "Name",
        value: `${states.value}`,
      });

      return tooltipDataArray;
    }

    function handleContextMenu() {
      selectAll(".states").on(
        "contextmenu",
        (event: PointerEvent, dataPoint: any) => {
          const mouseEvent: MouseEvent = <MouseEvent>event;
          this.selectionManager.showContextMenu(
            dataPoint ? dataPoint.selectionId : {},
            {
              x: mouseEvent.clientX,
              y: mouseEvent.clientY,
            }
          );
          mouseEvent.preventDefault();
        }
      );
    }

    function syncSelectionState(Selection, selectionIds: ISelectionId[]) {
      if (!Selection || !selectionIds) {
        return;
      }

      if (selectionIds.length === 0) {
        selectAll(".states").style("opacity", 1);
        return;
      }

      Selection.each((datapoint: IDatapoint, i, e) => {
        const selectionId = datapoint.selectionId;
        const isSelected = selectionIds.some((currentSelectionId) => {
          return currentSelectionId.includes(selectionId);
        });
        const opacity = isSelected ? 1 : 0.5;
        const currentSelection = select(e[i]);
        currentSelection.style("opacity", opacity);
      });
    }

    const category = options.dataViews[0].categorical.categories[0];


    function clicked(d, category) {
      console.log(states);

      const stateName = d.properties.name;
      const categoryIndex = category.findIndex((el) => `${el}` === stateName);
      const categorySelectionId = this.host
      .createSelectionIdBuilder()
      .withCategory(category.us.geometries.id[0], categoryIndex)
      .createSelectionId();
    this.selectionManager.select(categorySelectionId);

    const datapoint: IDatapoint = {
      state: d,
      selectionId: categorySelectionId,
    };

    

    states.data([datapoint]).on("click", (d: IDatapoint) => {
      // console.log(d);
     this.selectionManager
       .select(d.selectionId)
       .then((ids: ISelectionId[]) => {
         syncSelectionState(selectAll(".states"), ids);
       });
   });


    //   this.tooltipServiceWrapper.addTooltip(
    //     selectAll(".states"),
    //     (tooltipEvent: TooltipEventArgs<number>) =>
    //       getTooltipData(tooltipEvent),
    //     (tooltipEvent: any) => tooltipEvent.selectionId
    //   );

    //   handleContextMenu();

      // console.log("Visual update", options);

////**CLICK METHOD HERE ONWARDS**////
      // if (active.node() === this) return reset();
      // active.classed("active", false);
      // active = d3.select(this).classed("active", true);

      // var bounds = path.bounds(d),
      //   dx = bounds[1][0] - bounds[0][0],
      //   dy = bounds[1][1] - bounds[0][1],
      //   x = (bounds[0][0] + bounds[1][0]) / 2,
      //   y = (bounds[0][1] + bounds[1][1]) / 2,
      //   scale = Math.max(
      //     1,
      //     Math.min(8, 0.9 / Math.max(dx / this.width, dy / this.height))
      //   ),
      //   translate = [this.width / 2 - scale * x, this.height / 2 - scale * y];

      // this.SVG.transition()
      //   .duration(750)
      //   .call(
      //     zoom.transform,
      //     d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale)
      //   );
    }

    function reset() {
      active.classed("active", false);
      active = d3.select(null);

      this.SVG.transition()
        .duration(750)
        .call(zoom.transform, d3.zoomIdentity);
    }
  }

  /**
   * Returns properties pane formatting model content hierarchies, properties and latest formatting values, Then populate properties pane.
   * This method is called once every time we open properties pane or when the user edit any format property.
   */
  public getFormattingModel(): powerbi.visuals.FormattingModel {
    return this.formattingSettingsService.buildFormattingModel(
      this.formattingSettings
    );
  }
}
