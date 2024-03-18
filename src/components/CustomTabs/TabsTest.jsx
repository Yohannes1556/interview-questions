import React from 'react'
import Tabs from './Tabs'
import './Tabs.css'


function RandomComponent(){
    return <h1>Some random content</h1>
}

const TabsTest = () => {
    const tabs =[
        {label: 'Tab 1',content:<div>This is content for Tab 1</div>
    },
    {label: 'Tab 2',content:<div>This is content for Tab2</div>
    },
    {label: 'Tab 3',content: <RandomComponent />
    }

    ]

    function handleChange(currentTabIndex){
        console.log(currentTabIndex);
    }


  return (
    <Tabs tabsContent={tabs} onChange={handleChange}/>
  )
}

export default TabsTest