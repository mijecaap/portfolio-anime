import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as d3 from 'd3';
import cloud from 'd3-cloud';
import { BsCircle, BsCircleFill } from 'react-icons/bs';

const TagCloud = ({ width = 800, height = 500, words }) => {
  const svgRef = useRef();
  const [tooltip, setTooltip] = useState({ show: false, text: '', level: 0, icon: null, color: '', x: 0, y: 0 });

  const formattedWords = useMemo(() => words.map(skill => ({
    text: skill.name,
    size: 20 + (skill.skillLevel * 10), // Ajuste del tamaño para mejor equilibrio visual
    color: skill.color,
    level: skill.skillLevel,
    icon: skill.icon,
    opacity: 0 // Inicialmente invisible para la animación
  })), [words]);

  useEffect(() => {
    const layout = cloud()
      .size([width, height])
      .words(formattedWords)
      .padding(8) // Mayor espaciado entre palabras
      .rotate(() => (Math.random() * 2 - 1) * 30) // Rotación más sutil
      .fontSize(d => d.size)
      .on("end", draw);

    function draw(words) {
      const svg = d3.select(svgRef.current);
      svg.selectAll("*").remove();

      const group = svg
        .append("g")
        .attr("transform", `translate(${width/2},${height/2})`);

      const texts = group
        .selectAll("text")
        .data(words)
        .enter()
        .append("text")
        .style("font-size", d => `${d.size}px`)
        .style("fill", d => d.color)
        .style("font-family", "system-ui")
        .style("font-weight", "bold")
        .style("cursor", "pointer")
        .style("opacity", 1) // Iniciar invisible
        .attr("text-anchor", "middle")
        .attr("transform", d => `translate(${d.x},${d.y}) rotate(${d.rotate})`)
        .text(d => d.text);

      texts
        .on("mouseover", function(event, d) {
          const bounds = svgRef.current.getBoundingClientRect();
          d3.select(this)
            .style("transform", `scale(1.02) translate(${d.x}px, ${d.y}px) rotate(${d.rotate}deg)`)
            .style("filter", "brightness(1.2)");

          setTooltip({
            show: true,
            text: d.text,
            level: d.level,
            icon: d.icon,
            color: d.color,
            x: event.clientX - bounds.left,
            y: event.clientY - bounds.top
          });
        })
        .on("mousemove", (event) => {
          const bounds = svgRef.current.getBoundingClientRect();
          setTooltip(prev => ({
            ...prev,
            x: event.clientX - bounds.left,
            y: event.clientY - bounds.top
          }));
        })
        .on("mouseleave", function(_, d) {
          d3.select(this)
            .style("transform", `translate(${d.x}px, ${d.y}px) rotate(${d.rotate}deg)`)
            .style("filter", "brightness(1)");

          setTooltip({ show: false, text: '', level: 0, icon: null, color: '', x: 0, y: 0 });
        });
    }

    layout.start();
  }, [formattedWords, width, height]);

  return (
    <div className="tag-cloud-container">
      <div className="tag-cloud">
        <svg ref={svgRef} width={width} height={height}></svg>
        {tooltip.show && (
          <div 
            className="tooltip"
            style={{ 
              left: `${tooltip.x}px`,
              top: `${tooltip.y - 30}px`,
              backgroundColor: `${tooltip.color}10`
            }}
          >
            <div className="flex items-center gap-3">
              {tooltip.icon && tooltip.icon()}
              <div className="flex items-center gap-1">
                <span className="text-sm">Nivel:</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    i < tooltip.level ? (
                      <BsCircleFill 
                        key={i} 
                        className="text-white" 
                        size={8}
                      />
                    ) : (
                      <BsCircle 
                        key={i} 
                        className="text-white" 
                        size={8}
                      />
                    )
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <style>{`
        .tag-cloud-container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .tag-cloud {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: ${width}px;
          height: ${height}px;
        }
        .tooltip {
          position: absolute;
          color: white;
          padding: 10px 12px;
          border-radius: 6px;
          font-size: 14px;
          z-index: 1000;
          pointer-events: none;
          white-space: nowrap;
          transform: translateX(-50%);
          min-width: 150px;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.2s ease;
        }
      `}</style>
    </div>
  );
};

export default TagCloud;