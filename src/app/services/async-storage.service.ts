export interface Entity {
  _id: string
  [key: string]: any
}

export const storageService = {
  query,
  get,
  post,
  put,
  remove,
}

function query<T extends Entity>(entityType: string, delay = 500): Promise<T[]> {
  const data = localStorage.getItem(entityType)
  const entities: T[] = data ? JSON.parse(data) : []
  return new Promise(resolve => setTimeout(() => resolve(entities), delay))
}

function get<T extends Entity>(entityType: string, entityId: string): Promise<T> {
  return query<T>(entityType).then(entities => {
    const entity = entities.find(e => e._id === entityId)
    if (!entity)
      throw new Error(`Get failed: cannot find entity with id ${entityId} in ${entityType}`)
    return entity
  })
}

function post<T extends Entity>(entityType: string, newEntity: Omit<T, "_id">): Promise<T> {
  const entity = { ...newEntity, _id: newEntity._id ?? _makeId() } as T
  return query<T>(entityType).then(entities => {
    entities.push(entity)
    _save(entityType, entities)
    return entity
  })
}

function put<T extends Entity>(entityType: string, updatedEntity: T): Promise<T> {
  return query<T>(entityType).then(entities => {
    const idx = entities.findIndex(e => e._id === updatedEntity._id)
    if (idx < 0)
      throw new Error(`Update failed: cannot find entity with id ${updatedEntity._id} in ${entityType}`)
    entities.splice(idx, 1, updatedEntity)
    _save(entityType, entities)
    return updatedEntity
  })
}

function remove(entityType: string, entityId: string): Promise<void> {
  return query<Entity>(entityType).then(entities => {
    const idx = entities.findIndex(e => e._id === entityId)
    if (idx < 0)
      throw new Error(`Remove failed: cannot find entity with id ${entityId} in ${entityType}`)
    entities.splice(idx, 1)
    _save(entityType, entities)
  })
}

// ---------- Private helpers ----------

function _save(entityType: string, entities: any[]) {
  localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5): string {
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let text = ""
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}
