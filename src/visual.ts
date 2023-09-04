"use strict";

import powerbi from "powerbi-visuals-api";
import * as d3 from 'd3'; 
import * as topojson from 'topojson'; 
import { FormattingSettingsService } from "powerbi-visuals-utils-formattingmodel";
import "./../style/visual.less";

import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;

// import {statesJson} from "./statesData";

import { VisualFormattingSettingsModel } from "./settings";
import { select, zoom, geoAlbersUsa, geoPath, json } from "d3";

export class Visual implements IVisual {
    private target: HTMLElement;
    private formattingSettings: VisualFormattingSettingsModel;
    private formattingSettingsService: FormattingSettingsService;
    public SVG: any;
    public width: number = 960; 
    public height: number = 500;
    public zoom: any;
    public projection: any;
    public path: any;
    public g: any;
    

    constructor(options: VisualConstructorOptions) {
        // console.log('Visual constructor', options);
        this.formattingSettingsService = new FormattingSettingsService();
        this.target = options.element;
        this.SVG = select(this.target).append("svg").classed("SVG", true).attr("width", this.width).attr("height", this.height); 
        let active = d3.select(null);
        const projection = d3.geoAlbersUsa().scale(1290).translate([this.width / 2, this.height / 2]);
        const zoom = d3.zoom().scaleExtent([1, 8]).on("zoom", zoomed);
        const path = d3.geoPath().projection(projection); 


        this.SVG.append("rect")
               .attr("class", "background")
               .attr("width", this.width)
               .attr("height", this.height)
               .on("click", reset); 

        const g = this.SVG.append("g")
                      .style("stroke-width", "1.5px"); 

         d3.json("./statesData") 
         .then((us:any)=>{
         const states = g.append("g")
         .selectAll("path")
         .data(topojson.feature(us, us.objects.states).features)
         .enter().append("path")
         .attr("d", path)
         .attr("class", "feature")
         .on("click", clicked); 

         states.append("title")
               .text(d => d.properties.name);
         
         g.append("path")
         .datum(topojson.mesh(us, us.objects.states, (a: any, b: any) => a !== b)).attr("class", "mesh").attr("d", path);})

           .catch((err:any)=>{throw err}); 


       function clicked(d){
        if (active.node() === this) return reset();
        active.classed("active", false);
        active = d3.select(this).classed("active", true);

        var bounds = path.bounds(d),
            dx = bounds[1][0] - bounds[0][0],
            dy = bounds[1][1] - bounds[0][1],
            x = (bounds[0][0] + bounds[1][0]) / 2,
            y = (bounds[0][1] + bounds[1][1]) / 2,
            scale = Math.max(1, Math.min(8, 0.9 / Math.max(dx / this.width, dy / this.height))),
            translate = [this.width / 2 - scale * x, this.height / 2 - scale * y];

        this.SVG.transition()
            .duration(750)
            .call(zoom.transform, d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale));}


        function reset() {
            active.classed("active", false);
                // active = d3.select(null);
    
            this.SVG.transition()
                .duration(750)
                .call(zoom.transform, d3.zoomIdentity);
            }

            function zoomed(event, d) {
                g.style("stroke-width", 1.5 / event.transform.k + "px");
                g.attr("transform", event.transform);
            }
    
            function stopped(event, d) {
                if (event.defaultPrevented) event.stopPropagation();
            }
    }

    
    public update(options: VisualUpdateOptions) {
        this.formattingSettings = this.formattingSettingsService.populateFormattingSettingsModel(VisualFormattingSettingsModel, options.dataViews);

        // console.log('Visual update', options);

    }

    /**
     * Returns properties pane formatting model content hierarchies, properties and latest formatting values, Then populate properties pane.
     * This method is called once every time we open properties pane or when the user edit any format property. 
     */
    public getFormattingModel(): powerbi.visuals.FormattingModel {
        return this.formattingSettingsService.buildFormattingModel(this.formattingSettings);
    }


}