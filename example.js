const Content = ({item, transition, templates, ...rest}) =>  {
    const nodeRef = React.useRef(null)
    return(
      <CSSTransition
          {...rest}
          nodeRef={nodeRef}
          timeout={transition.timeout}
          classNames={'wscfl-list__' + item.type + '-'}
        >
          <li ref={nodeRef} className={'wscfl-list__' + item.type} >
            <Item item={item} template={templates[item.type]} pkey={item.id}/>
          </li>
        </CSSTransition>
  
     )
  }
  
  function List({ list, templates, transition }) {
    return (
      <TransitionGroup 
          className="wscfl-list"
          component="ul"
      >
      {list.map((item) => (
          <Content item={item} key={item.id} templates={templates} transition={transition}/>
      ))}
      </TransitionGroup>
    );
  }