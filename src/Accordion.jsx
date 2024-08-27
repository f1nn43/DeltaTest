import { useState } from "react"
import Chart from 'chart.js/auto';

const Accordion = (props) => {
    const [isActive, setIsActive] = useState(false);
    const [node, setNode] = useState(null)
    const activeFunc = (e) => {
        setIsActive(!isActive)
        let target;
        if(e.target.localName == 'span'){
            target = e.target.parentNode
        } else {
            target = e.target
        }
        if(node){
            node.map(el => {
                target.parentNode.parentNode.removeChild(el)
            })
            setNode(null)
        } else {
            let contents = []
            let graph = document.createElement('tr')
            graph.classList.add('graph');
            graph.innerHTML = `<td colspan="4" style="background-color: #fff;"><canvas id="graph${props.deal.id}"></canvas></td>`
            target.parentNode.after(graph)
            const data = [
                { year: 2010, count: 10 },
                { year: 2011, count: 20 },
                { year: 2012, count: 15 },
                { year: 2013, count: 25 },
                { year: 2014, count: 22 },
                { year: 2015, count: 30 },
                { year: 2016, count: 28 },
            ];
            new Chart(
                document.getElementById('graph'+props.deal.id),
                {
                    type: 'line',
                    data: {
                        labels: data.map(row => row.year),
                        datasets: [
                            {
                                data: data.map(row => row.count)
                            }
                        ]
                    },
                    options: {
                        plugins: {
                            legend: {
                                display: false
                            }
                        }
                    }
                }
            );
            contents.push(graph)
            console.log(contents)
            target = document.getElementById('graph'+props.deal.id).parentNode.parentNode
            props.deal.content.map(el => {
                let content = document.createElement('tr')
                content.innerHTML = `<td>&ensp;${el.title}</td><td>${el.today}</td><td className='${Number(el.yesterdayPerc.slice(0, -1)) < 0 ? 'app__warning' : 'app__active'}'><div>${el.yesterday}<span>${el.yesterdayPerc}</span></div></td><td>${el.thisWeek}</td></tr>`
                target.after(content)
                contents.push(content)
                target = content
                console.log(target)
            })
            setNode(contents)
        }
    }
    return(
        <tr onClick={(e) => activeFunc(e)}><td>{props.deal.title}</td><td>{props.deal.today}</td><td className={Number(props.deal.yesterdayPerc.slice(0, -1)) < 0 ? 'app__warning' : 'app__active'}>{props.deal.yesterday}<span>{props.deal.yesterdayPerc}</span></td><td className='app__active'>{props.deal.thisWeek}</td></tr>
    )
}

export default Accordion