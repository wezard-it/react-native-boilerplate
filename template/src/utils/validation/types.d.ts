type FieldType = 'date' | 'string' | 'number'

type RuleType = 'phone' | 'equals' | 'same' | 'match'

interface ValidationSchemaProps {
  [key: string]: {
    type: FieldType
    rules: {
      [key: RuleType]: {
        error: string
        value?: string | Date | RegExp
        key?: string
      }
    }
  }
}

type AnySchema =
  | Yup.StringSchema<string | null | undefined, unknown>
  | Yup.DateSchema
  | Yup.ObjectSchema
  | Yup.MixedSchema
