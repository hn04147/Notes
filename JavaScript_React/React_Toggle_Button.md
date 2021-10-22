``` react
const [isToggle, setIsToggle] = useState(false)

const onHandleToggle = () => {
  setIsToggle(!isToggle)
}

return (
  <div>
    <input
      checked={isToggle}
      style={{ display: 'none' }}
     />
    <label
      id='switch-label'
      onClick={onHandleToggle}
      style={{
        backgroundColor: isToggle ? '#00C3C5' : '#D1D5DB',
        display: 'relative',
        height: '22px',
        width: '36px',
        borderRadius: '50%',
        display: 'inline-block',
        cursor: 'pointer'
      }}
    >
      <div
      	id='switch-ball'
        style={{
          transform: isToggle ? `translateX(14px)` : `translateX(0px)`,
          transition: 'transform 0.1s linear',
          position: 'absolute',
          height: '20px',
          width: '20px',
          borderRadius: '50%',
          top: '1px',
          left: '1px',
          backgroundColor: '#FFFFFF'
        }}
      />
    </label>
  </div>
)
```



