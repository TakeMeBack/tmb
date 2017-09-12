export default {
  _create(str, payload) {
    if (RESERVED_ACTIONS[str]) throw new Error(RESERVED_ACTIONS[str]);
    this[str] = str;
    return {
      type: str,
      payload
    }
  }
}

const RESERVED_ACTIONS = {
  _create: "actions._create is reserved for creating new action types",
  _init: "actions._init is used solely for initializing the global XNS object"
}