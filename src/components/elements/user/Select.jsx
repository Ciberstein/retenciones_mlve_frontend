import React from 'react';
import { Link } from 'react-router-dom';

export const Select = ({
  label = null,
  type = 'text',
  variant = 'normal',
  children = '',
  className = '',
  size = 'md',
  icon = null,
  check = true,
  placeholder = 'Select any option',
  options = [],
  element = null,
  helperLink = { url: null, text: null },
  register = {
    function: null,
    errors: { function: null, rules: {} },
  },
  ...props
}) => {
  const variants = {
    sm: 'text-sm p-2',
    md: 'text-md p-3',
    lg: 'text-lg p-4',
    xl: 'text-xl p-5',
  };

  return (
    <div className="flex flex-col flex-grow gap-2">
      { label || helperLink.url || helperLink.text ?
        <div className="flex gap-2 justify-between">
          { label &&
            <label
              htmlFor={props.id || null}
              className="text-sm text-black"
            >
              {label || null}
            </label>        
          }
          {
            helperLink.url || helperLink.text ?
            <Link
              to={helperLink.url || null}
              className="text-sm text-blue-400 hover:underline"
            >
              {helperLink.text || null}
            </Link>      
            : null    
          }
        </div> : null 
      }
      <div
        className={`flex gap-2 items-center border rounded-lg ${
          register.errors.function &&
          register.errors.function[props.name]
            ? 'border-red-400'
            : 'border-gray-300'
        } ${variants[size]} ${className}`}
      >
        <label
          htmlFor={props.id || null}
          className="flex flex-grow gap-2 items-center"
        >
          {icon && icon}
          <select
            id={props.id || null}
            name={props.name || null}
            type={type}
            className={`bg-transparent w-full placeholder:text-gray-500 focus-visible:outline-none disabled:text-gray-500`}
            { ...register.function &&
              {...register.function(
                props.name,
                register.errors.rules,
              )}
            }
            {...props}
          >
            {placeholder && <option disabled value="" selected={props.defaultValue ? false : true}>{placeholder}</option>}
            {
              options.map(option => (
                <option 
                  key={option.value}
                  value={option.value}
                  selected={option.selected && false}
                  disabled={option.disabled && false}
                >
                  {option.label}
                </option>
              ))
            }
          </select>
        </label>
        {element && element}
      </div>
      { register.errors.function &&
        register.errors.function[props.name] && (
          <label
            htmlFor={props.id || null}
            className="text-xs text-red-400"
          >
            {
              register.errors.function[props.name]
                .message
            }
          </label>
      )}
    </div>
  );
};